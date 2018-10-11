import React, { Component } from 'react';
import logo from '../logo.svg';
import './Content.css';

import contributors from '../mockup.json';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="c-content">
            <ul>
            {
                contributors.map(function(contributor){
                    return <li>{contributor.name} - {contributor.contributions} - {contributor.followers} - {contributor.pubRepos} - {contributor.gists} </li>;
                })
            }
            </ul>
        </div>
      </div>
    );
  }
}

export default Content;
