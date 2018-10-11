import React, { Component } from 'react';
import logo from '../logo.svg';
import avartar from '../img/identicon.png';
import './Content.css';

import contributors from '../mockup.json';

class Content extends Component {

  render() {
    return (
      <div className="Content">
        <div className="c-content">
            <ul>
            {
                contributors.sort(
                  (a,b) => (b.contributions + b.followers + b.pubRepos + b.gists ) - (a.contributions + a.followers + a.pubRepos + a.gists) 
                ).map(function(contributor){
                    return <li><img src={avartar} />
                    {contributor.name} 
                    - {contributor.contributions}
                    - {contributor.followers}
                    - {contributor.pubRepos}
                    - {contributor.gists}
                    </li>;
                })
            }
            </ul>
        </div>
      </div>
    );
  }
}

export default Content;
