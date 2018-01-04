import React from 'react';

export default class About extends React.Component{
  render() {
    return (
      <div className="row" style={{padding: '10px 50px'}}>
        <div className="col-md-12">
          <h2>Our goal</h2>
          <p>
            The goal of this project is to help Dockerfile authors create better and more portable Docker images.  This includes:
          </p>
          <ul>
            <li>Writing Dockerfiles that are maintainable</li>
            <li>Learning best practices that are not always clearly documented</li>
            <li>Avoiding deprecated syntax</li>
            <li>Smallest possible images</li>
          </ul>
          <h2>Why <a className="link" href="https://www.dockerfilelint.com">dockerfilelint.com</a>?</h2>
          <p>
            <a className="link" href="https://www.dockerfilelint.com">dockerfilelint.com</a> was created as an alternative to the original
            project <a className="link" href="https://www.fromlatest.io">fromlatest.io</a> which had not been updated since January 2017.
            Since the linter has been continually updated to keep up with dockerfile changes their website is out of date.
            For example, multi-stage builds one of the newest and greatest changes to dockerfiles are not catered for.
          </p>
          <h2>Credit where credit is due</h2>
          <p>
            As mentioned above this website was born out of <a className="link" href="https://www.fromlatest.io">fromlatest.io</a>.
            Both <a className="link" href="https://www.dockerfilelint.com">dockerfilelint.com</a> and <a className="link" href="https://www.fromlatest.io">fromlatest.io</a> are based upon the superb dockerfile
            linter <a className="link" href="https://github.com/replicatedhq/dockerfilelint">dockerfilelint</a> developed by the team
            at <a className="link" href="http://www.replicated.com">Replicated</a> so great credit to the them for an excellent tool.
          </p>
        </div>
      </div>
    );
  }
}
