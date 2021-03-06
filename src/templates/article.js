import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Bio from '../components/biography/'
import { rhythm, scale } from '../utils/typography'

export default class ArticleTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const tags =
      post.frontmatter.tags != null ? post.frontmatter.tags.split(',') : []
    const readTime = (words, options) => {
      const defaults = Object.assign(
          {
            wordsPerMinute: 225,
          },
          options,
        ),
        minutes = words / defaults.wordsPerMinute

      return `${Math.ceil(minutes.toFixed(2))} min read`
    }

    const meta = [
      { name: 'description', content: post.frontmatter.description },
      { name: 'og:url', content: post.frontmatter.path },
      { name: 'og:type', content: 'article' },
      { name: 'og:title', content: post.frontmatter.title },
      { name: 'og:description', content: post.frontmatter.description },
      { name: 'twitter:site', content: '@matchilling' },
      { name: 'twitter:creator', content: '@matchilling' },
      { name: 'twitter:description', content: post.frontmatter.description },
      { name: 'twitter:label_read_time', content: 'Reading time' },
      {
        name: 'twitter:data_read_time',
        content: readTime(post.wordCount.words),
      },
    ]

    const re = /\"(\/static.*?)\"/g
    let firstImageUrl = post.html.match(re)
    if (firstImageUrl) {
      const url = `https://www.matchilling.com${firstImageUrl[0].replace(
        /['"]+/g,
        '',
      )}`
      meta.push({ name: 'og:image', content: url })
      meta.push({ name: 'twitter:image', content: url })
    }

    return (
      <article>
        <Helmet title={post.frontmatter.title} meta={meta} />
        <h1>
          <Link
            style={{ color: 'hsla(0,0%,0%,0.9)', boxShadow: 'none' }}
            to={post.frontmatter.path}
          >
            {post.frontmatter.title}
          </Link>
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            color: 'rgba(0, 0, 0, 0.35)',
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-0.5),
          }}
        >
          {post.frontmatter.date} • {readTime(post.wordCount.words)}
          {tags.length > 0 ? ` • ${tags.join(', ')}` : null}
          {post.frontmatter.hn_id && (
            <span>
              <span> • </span>
              <a
                target="_blank"
                rel="nofollow"
                href={`https://news.ycombinator.com/item?id=${post.frontmatter.hn_id}`}
              >
                comments
              </a>
            </span>
          )}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ marginBottom: rhythm(1) }} />
        <Bio />
      </article>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        hn_id
        path
        tags
        title
        description
      }
      wordCount {
        words
      }
    }
  }
`
