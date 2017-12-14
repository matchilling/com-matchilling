import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

import Bio from './../components/biography/'
import profile from './../../data/profile.json'
import pgp from './../../data/pgp_keys.json'

import { rhythm } from './../utils/typography'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Contact" />
        <h1>Contact</h1>
        <Bio />
        <p>... or drop me a line at {profile.contact.email}</p>
        <hr style={{ marginBottom: rhythm(1) }} />
        <pre style={{ marginBottom: rhythm(1), textAlign: 'center' }}>
          {pgp[profile.contact.email]}
        </pre>
      </div>
    )
  }
}