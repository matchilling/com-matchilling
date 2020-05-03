import React from 'react'

import profile from './../../../data/profile.json'
import profilePicture from './profile.jpg'
import { rhythm } from './../../utils/typography'

export default class Biography extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <img
          alt={profile.name}
          src={profilePicture}
          style={{
            height: rhythm(3),
            marginBottom: 0,
            marginRight: rhythm(1 / 2),
            width: rhythm(3),
          }}
        />
        <p>
          99% of the time my brain is thinking blah, meh, why, huh, WTF, food
          and programming. The other 1% I’m usually asleep. You can find me on{' '}
          <a href={profile.contact.twitter} target="_blank">
            Twitter
          </a>
          ,{' '}
          <a href={profile.contact.linkedin} target="_blank">
            LinkedIn
          </a>
          ,{' '}
          <a href={profile.contact.github} target="_blank">
            GitHub
          </a>
          ,{' '}
          <a href={profile.contact.reddit} target="_blank">
            Reddit
          </a>
          ,{' '}
          and{' '}
          <a href={profile.contact.lastfm} target="_blank">
            Last.fm
          </a>
          .
        </p>
      </div>
    )
  }
}
