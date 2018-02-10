import React from 'react';

export default class Contribute extends React.Component{
  render() {
    return (
      <div className="row" style={{padding: '10px 50px'}}>
        <div className="col-md-12">
          <h2>Contribute</h2>
          <p>
            This website comprises of two projects; <b>Dockerfilelint</b> &amp; <b>Dockerfilelint.com</b> both are open
            source and would welcome contributors.
          </p>
          <p>
            <b>Dockerfilelint</b> is an opinionated Dockerfile linter with the source code hosted on GitHub.
          </p>
          <p>
            <b>Dockerfilelint.com</b> is this website which runs the input dockerfile against <b>Dockerfilelint</b>.
            The source code is primarily hosted on GitLab but there is also a mirror on GitHub, I welcome contributions
            on either platform.
          </p>
          <h3>Linter</h3>
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  The linter is available at:
                  <a className="link" href="https://github.com/replicatedhq/dockerfilelint"> <i className="fa fa-github" /> replicatedhq/dockerfilelint</a>
                </li>
              </ul>
            </div>
          </div>
          <h3>Website</h3>
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  The GitLab website is available at:
                  <a className="link" href="https://gitlab.com/TheYorkshireDev/dockerfilelint.com"> <i className="fa fa-gitlab" /> TheYorkshireDev/dockerfilelint.com</a>
                </li>
                <li>
                  The GitHub website is available at:
                  <a className="link" href="https://github.com/TheYorkshireDev/dockerfilelint.com"> <i className="fa fa-github" /> TheYorkshireDev/dockerfilelint.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
