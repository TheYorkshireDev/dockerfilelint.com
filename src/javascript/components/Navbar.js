import React from 'react';

import logoImage from 'assets/dockerfilelint-logo.png';
import logoImageAlpha from 'assets/dockerfilelint-logo-alpha.png';
import logoImageBeta from 'assets/dockerfilelint-logo-beta.png';

export default class Navbar extends React.Component{
  render() {

    var logo;
    if (window.environment == 'alpha') {
      logo = <a href="#"><img src={logoImageAlpha} alt="Dockerfile Lint Alpha" style={{height: '60px'}}/></a>;
    } else if (window.environment == 'beta') {
      logo = <a href="#"><img src={logoImageBeta} alt="Dockerfile Lint Beta" style={{height: '60px'}}/></a>;
    } else {
      logo = <a href="#"><img src={logoImage} alt="Dockerfile Lint" style={{height: '60px'}}/></a>;
    }

    return (
      <div className="navbar">
        {logo}

        <ul className="navbar-nav">
          <li>
            <a href="/#">Analyze</a>
          </li>
          <li>
            <a href="/#/about">About</a>
          </li>
          <li>
            <a href="/#/contribute">Contribute</a>
          </li>
        </ul>
      </div>
    );
  }
}
