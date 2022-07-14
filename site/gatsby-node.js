const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require("gatsby-awesome-pagination")

const POST_FILENAME_REGEX = /^\/(?<category>.+)\/(\/?\d+)*\/(?<slug>.*)/
const ITEMS_PER_PAGE = 10
const SLIDEDECK_CATEGORY = "slidedeck"
const CATEGORIES = [
  { slug: "blog", indexPageTitle: "All Blog Posts" },
  { slug: "article", indexPageTitle: "All Articles" },
  { slug: SLIDEDECK_CATEGORY, indexPageTitle: "All Slide Decks" },
]

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type !== `Mdx`) {
    return
  }

  const value = createFilePath({ node, getNode })
  let slugValue = `/post/${value}`
  let categoryValue = `post`

  const match = POST_FILENAME_REGEX.exec(value)
  if (match !== null) {
    const category = match.groups["category"]
    const slug = node.frontmatter.slug
      ? node.frontmatter.slug
      : match.groups["slug"]
    slugValue = `/${category}/${slug}`
    categoryValue = category
  }

  createNodeField({
    name: `slug`,
    node,
    value: slugValue,
  })

  createNodeField({
    name: `category`,
    node,
    value: categoryValue,
  })

  if (categoryValue === SLIDEDECK_CATEGORY) {
    createNodeField({
      name: `slugSlide`,
      node,
      value: `${slugValue}show`,
    })
  }

  if (node.frontmatter.date) {
    const date = new Date(node.frontmatter.date)
    const year = date.getFullYear()

    createNodeField({
      name: `year`,
      node,
      value: year,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all(
    CATEGORIES.map(async category => {
      await Promise.all([
        await createPagesForCategory({
          graphql,
          actions,
          reporter,
          category,
        }),

        await createPaginatedIndexForCategory({
          graphql,
          actions,
          reporter,
          category,
        }),
      ])
    })
  )

  await createPaginatedTagIndexPages({
    graphql,
    actions,
    reporter,
  })

  await createPaginatedYearIndexPages({
    graphql,
    actions,
    reporter,
  })
}

const createPagesForCategory = async ({
  graphql,
  actions,
  reporter,
  category,
}) => {
  const { createPage } = actions

  const slideShowTemplate = path.resolve(`./src/templates/slide_show.js`)
  let postTemplate = path.resolve(`./src/templates/post_${category.slug}.js`)
  try {
    fs.accessSync(postTemplate, fs.constants.R_OK)
  } catch {
    postTemplate = path.resolve(`./src/templates/post.js`)
  }

  const pathGlob = `**/${category.slug}/**`

  // Get all markdown posts in a folder
  const result = await graphql(
    `
      {
        allMdx(
          filter: {
            fileAbsolutePath: { glob: "${pathGlob}" }
            fields: { visible: { eq: true } }
          }
          sort: { fields: [frontmatter___date], order: ASC }
        ) {
          nodes {
            id
            fileAbsolutePath
            fields {
              slug
              slugSlide
              category
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      const postPathGlob = `${path.dirname(post.fileAbsolutePath)}/*`

      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          id: post.id,
          pathGlob: postPathGlob,
          previousPostId,
          nextPostId,
        },
      })

      // Additional page for slides fullscreen preview
      if (post.fields.category === SLIDEDECK_CATEGORY) {
        createPage({
          path: post.fields.slugSlide,
          component: slideShowTemplate,
          context: {
            id: post.id,
          },
        })
      }
    })
  }
}

const createPaginatedIndexForCategory = async ({
  graphql,
  actions,
  reporter,
  category,
}) => {
  const { createPage } = actions

  let postTemplate = path.resolve(
    `./src/templates/paginatedPostIndex_${category.slug}.js`
  )
  try {
    fs.accessSync(postTemplate, fs.constants.R_OK)
  } catch {
    postTemplate = path.resolve(`./src/templates/paginatedPostIndex.js`)
  }

  // Get all markdown posts in a folder sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          filter: {
            fileAbsolutePath: { glob: "**/${category.slug}/**" }
            fields: { visible: { eq: true } }
          }
        ) {
          nodes {
            id
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  const wrapperCreatePage = page => {
    const pageWithNewContext = {
      ...page,
      context: {
        ...page.context,
        category: category.slug,
        pageTitle: category.indexPageTitle,
      },
    }

    return createPage(pageWithNewContext)
  }

  // Creates pages like `/category`, `/category/2`, etc
  paginate({
    createPage: wrapperCreatePage,
    items: posts,
    itemsPerPage: ITEMS_PER_PAGE,
    pathPrefix: `/${category.slug}`,
    component: postTemplate,
  })
}

const getTags = allPosts => {
  const uniqueTags = new Set()

  allPosts.forEach(node => {
    node.frontmatter?.tags?.forEach(tag => {
      uniqueTags.add(tag.toLowerCase())
    })
  })

  return Array.from(uniqueTags)
}

const createPaginatedTagIndexPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const tagIndexTemplate = path.resolve(
    `./src/templates/paginatedPostIndex_tag.js`
  )

  // Get all markdown posts
  const result = await graphql(
    `
      {
        allMdx(filter: { fields: { visible: { eq: true } } }) {
          nodes {
            id
            frontmatter {
              tags
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  const tags = getTags(result.data.allMdx.nodes)

  tags?.forEach((tag, _) => {
    const posts = result.data.allMdx.nodes.filter(node => {
      lowercaseTags = node.frontmatter?.tags?.map(tag => tag.toLowerCase())
      return lowercaseTags?.includes(tag) ?? false
    })

    const wrapperCreatePage = page => {
      const pageWithNewContext = {
        ...page,
        context: {
          ...page.context,
          tag,
          ids: posts.map(node => node.id),
        },
      }

      return createPage(pageWithNewContext)
    }

    paginate({
      createPage: wrapperCreatePage,
      items: posts,
      itemsPerPage: ITEMS_PER_PAGE,
      pathPrefix: `/tag/${tag}`,
      component: tagIndexTemplate,
    })
  })
}

const createPaginatedYearIndexPages = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  const yearIndexTemplate = path.resolve(
    `./src/templates/paginatedPostIndex_year.js`
  )

  const result = await graphql(
    `
      {
        allMdx(filter: { fields: { visible: { eq: true } } }) {
          group(field: fields___year) {
            nodes {
              id
            }
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  if (result.data.allMdx.group.length > 0) {
    result.data.allMdx.group.forEach((group, _) => {
      const year = group.fieldValue
      const posts = group.nodes

      const wrapperCreatePage = page => {
        const pageWithNewContext = {
          ...page,
          context: {
            ...page.context,
            year,
            ids: posts.map(node => node.id),
          },
        }

        return createPage(pageWithNewContext)
      }

      paginate({
        createPage: wrapperCreatePage,
        items: posts,
        itemsPerPage: ITEMS_PER_PAGE,
        pathPrefix: `/year/${year}`,
        component: yearIndexTemplate,
      })
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      github: String
      twitter: String
      linkedin: String
    }

    type Contact {
      email: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      updated: Date @dateformat
      tags: [String]
      draft: Boolean
      slide_url: String
    }

    type ReadingTime {
      text: String
    }

    type Fields {
      slug: String
      slugSlide: String
      category: String
      year: String
      visible: Boolean
      published: Boolean
      readingTime: ReadingTime
    }
  `)
}
