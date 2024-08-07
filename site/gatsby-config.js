const path = require("path")

module.exports = {
  flags: {
    DEV_SSR: true,
  },

  siteMetadata: {
    title: `Paulo Menin`,
    author: {
      name: `Paulo Menin`,
      summary: `Software Engineer and Architect`,
    },
    description: `Paulo Menin's website`,
    siteUrl: `https://paulomenin.dev`,
    social: {
      github: `https://github.com/paulomenin`,
      linkedin: `https://linkedin.com/in/paulo-henrique-menin`,
    },
    contact: {
      email: `paulomenin@gmail.com`,
    },
  },

  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-static-folders",
      options: {
        folders: [`./content/slide-decks`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/slide-decks`,
        ignore: [
          string => {
            path.extname(string).toLowerCase() !== ".kroki"
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-kroki`,
      options: {
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-kroki`,
      options: {
        path: `${__dirname}/content/slide-decks`,
        copyToSrcPath: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-plugin-published`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: { fields: { published: { eq: true } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                  limit: 15
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Paulo Menin RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paulo Menin's Website`,
        short_name: `Paulo Menin`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `images/profile_logo_src.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-cname`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://paulomenin.dev`,
        sitemap: `https://paulomenin.dev/sitemap.xml`,
        policy: [
          { userAgent: "GPTBot", disallow: "/" },
          { userAgent: "ChatGPT-User", disallow: "/" },
          { userAgent: "Google-Extended", disallow: "/" },
          { userAgent: "CCBot", disallow: "/" },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ["/resume", "/slidedeck/**/show"],
        query: `
        {
          site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMdx {
              nodes {
                frontmatter {
                  date
                  updated
                }
                fields {
                  slug
                }
              }
            }
          }
          `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMdx: { nodes: allMdxNodes },
        }) => {
          const mdxNodeMap = allMdxNodes.reduce((acc, node) => {
            const {
              fields: { slug },
            } = node
            acc[slug] = { ...node, priority: 0.7 }

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...mdxNodeMap[page.path] }
          })
        },
        serialize: ({ path, frontmatter, priority }) => {
          let lastmod = undefined

          if (frontmatter) {
            const { date, updated } = frontmatter
            lastmod = updated || date
          }

          return {
            url: path,
            lastmod,
            changefreq: "daily",
            priority: priority || 0.5,
          }
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
