const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require('gatsby-awesome-pagination')

const POST_FILENAME_REGEX = /^\/(?<category>.+)\/(\/?\d+)*\/(?<slug>.*)/
const PAGINATION_PAGE_SIZE = 2

const createPagesInFolder = async ({graphql, actions, folderName}) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/post.js`)

  // Get all markdown posts in a folder sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {glob: "**/${folderName}/**"}}
          sort: { fields: [frontmatter___date], order: ASC }
        ) {
          nodes {
            id
            fields {
              slug
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

  const posts = result.data.allMarkdownRemark.nodes

  // Create posts pages
  // But only if there's at least one markdown file found at "content/" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

const createPaginatedPostsIndex = async ({graphql, actions, folderName}) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/paginatedPostIndex_${folderName}.js`)

  // Get all markdown posts in a folder sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {glob: "**/${folderName}/**"}}
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

  const posts = result.data.allMarkdownRemark.nodes

  paginate({
    createPage,
    items: posts,
    itemsPerPage: PAGINATION_PAGE_SIZE,
    pathPrefix: `/${folderName}`, // Creates pages like `/folderName`, `/folderName/2`, etc
    component: postTemplate,
  })
}


const getTags = (allPosts) => {
  const uniqueTags = new Set()

  allPosts.forEach(({node}) => {
      node.frontmatter.tags.forEach(tag => {
          uniqueTags.add(tag)
      })
  })

  return Array.from(uniqueTags)
}

const createTagsPages = async ({graphql, actions, folderName}) => {
  const { createPage } = actions

  const tagIndexTemplate = path.resolve(`./src/templates/paginatedPostIndex_tag.js`)

  // Get all markdown posts
  const result = await graphql(
      `
      {
        allMarkdownRemark(filter: {}) {
        edges {
            node {
              id
              frontmatter {
                tags
              }
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

  const tags = getTags(result.data.allMarkdownRemark.edges)

  if (tags.length > 0) {
    tags.forEach((tag, index) => {

      const posts = result.data.allMarkdownRemark.edges
        .filter(({ node }) => {
          return node.frontmatter.tags.includes(tag)
        });

      const wrapperCreatePage = (page) => {
        const pageWithNewContext = {
          ...page,
          context: {
            ...page.context,
            tag,
             ids: posts.map(({node}) => node.id),
          }
        };

        return createPage(pageWithNewContext);;
      }

      paginate({
        createPage: wrapperCreatePage,
        items: posts,
        itemsPerPage: PAGINATION_PAGE_SIZE,
        pathPrefix: `/tag/${tag}`,
        component: tagIndexTemplate,
      })

    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all(
    [
      "blog",
      "article",
    ].map(async (folderName) => {
      await Promise.all([
        await createPagesInFolder({
          graphql,
          actions,
          reporter,
          folderName,
        }),

        await createPaginatedPostsIndex({
          graphql,
          actions,
          reporter,
          folderName,
        })
      ]);
    })
  );

  await createTagsPages({
    graphql,
    actions,
    reporter,
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    let slug = node.frontmatter.slug
    const match = POST_FILENAME_REGEX.exec(value)
    if (match !== null) {
        const category = match.groups['category']
        const finalSlug = slug ? slug : match.groups['slug']
        createNodeField({
          name: `slug`,
          node,
          value: `/${category}/${finalSlug}`,
        })
        createNodeField({
          name: `category`,
          node,
          value: category,
        })
    } else {
        createNodeField({
          name: `slug`,
          node,
          value: `/post/${value}`,
        })
        createNodeField({
          name: `category`,
          node,
          value: `post`,
        })
    }

  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
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

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String]
    }

    type Fields {
      slug: String
      category: String
    }
  `)
}
