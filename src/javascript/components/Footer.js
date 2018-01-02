import React from 'react';

export default class Footer extends React.Component{
  render() {
    return (
      <footer>
          <div> 
            <div className="col-md-6 releases">
{window.environment == 'development' || window.environment == 'alpha' ? 'Build Version: ' : 'Website Version: '}
{window.environment == 'development' || window.environment == 'alpha' ? window.buildVersion : window.websiteVersion }<br />Linter Version: {window.linterVersion}
            </div>
            <div className="col-md-6" style={{textAlign: 'right', fontSize: '12px'}}>
              <a href="https://github.com/TheYorkshireDev/dockerfilelint.com" target="_blank"><i className="fa fa-github" /> TheYorkshireDev/dockerfilelint.com</a> was forked from <a href="https://github.com/replicatedhq/fromlatest.io" target="_blank"><i className="fa fa-github" /> replicatedhq/fromlatest.io</a>
            </div>
          </div>
      </footer>
    );
  }
}
