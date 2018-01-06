import React from 'react';

export default class Footer extends React.Component{
  render() {

    var leftContent;
    var middleContent;

    if (window.environment == 'prod' || window.environment == 'beta')
    {
      leftContent = (
        <div className="col-md-4 releases">
          Website Version: {window.websiteVersion}<br />
          Linter Version: {window.linterVersion}
        </div>
      );
    } else {
      leftContent = (
        <div className="col-md-4 releases">
          Build Version: {window.buildVersion}<br />
          Linter Version: {window.linterVersion}
        </div>
      );
    }

    if (window.environment != 'prod')
    {
      middleContent = (
        <div className="col-md-4">
          <b>Please Note:</b> You are using a pre-release version of <a className="link" href="https://www.dockerfilelint.com">dockerfilelint.com</a>
        </div>
      );
    } else {
      middleContent = (
        <div className="col-md-4"></div>
      );
    }

    return (
      <footer>
          <div> 
            {leftContent}
            {middleContent}
            <div className="col-md-4" style={{textAlign: 'right', fontSize: '12px'}}>
              <a href="https://github.com/TheYorkshireDev/dockerfilelint.com" target="_blank"><i className="fa fa-github" /> TheYorkshireDev/dockerfilelint.com</a> was forked from <a href="https://github.com/replicatedhq/fromlatest.io" target="_blank"><i className="fa fa-github" /> replicatedhq/fromlatest.io</a>
            </div>
          </div>
      </footer>
    );
  }
}
