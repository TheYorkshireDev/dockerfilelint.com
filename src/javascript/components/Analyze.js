import React from 'react';

import DockerfileEditor from 'components/DockerfileEditor';
import DockerfileAnalysis from 'components/DockerfileAnalysis';

import dockerfilelint from 'dockerfilelint';

export default class Analyze extends React.Component{
  constructor(props) {
    super(props);

    var dockerfile = '# This is a sample Dockerfile with a couple of problems.\n' +
                     '# Paste your Dockerfile here.\n\n' +
                     'FROM golang:1.7.3 as builder\n' +
                     'WORKDIR /go/src/github.com/alexellis/href-counter/\n' +
                     'RUN go get -d -v golang.org/x/net/html\n' +
                     'COPY app.go .\n' +
                     'RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .\n\n' +
                     'FROM alpine:latest\n' +
                     'RUN apk add ca-certificates\n' +
                     'WORKDIR /root/\n' +
                     'copy --from=builder /go/src/github.com/alexellis/href-counter/app .\n' +
                     'CMD ["./app"]';

    this.binder('handleSelectionChange', 'handleInputChange');

    this.state = {
      content: dockerfile,
      analysis: [],
      item: null,
      selectionStart: -1,
      selectionStop: -1
    }
  }

  binder(...methods) {
    methods.forEach(
      (method) => this[method] = this[method].bind(this)
    );
  }

  handleSelectionChange(start, stop) {
    this.state.selectionStart = start;
    this.state.selectionStop = stop;
    this.setState(this.state);
  }

  handleInputChange(content) {
    this.setState({content: content});

    // analyze it
    gtag('event', 'analysis', {
      event_category: 'Analysis',
      event_action: 'start',
      event_label: 'Dockerfile analysis start'
    });

    var analysis = dockerfilelint.run('', content);
    var resultLabel = analysis.length === 0 ? 'no problems detected' : 'problems detected';
    gtag('event', 'analysis', {
      event_category: 'Analysis',
      event_action: analysis.length === 0 ? 'no-problems' : 'problems',
      event_label: 'Dockerfile analysis end with ' + resultLabel
    });

    this.setState({analysis: analysis});
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <DockerfileEditor dockerfile={this.state.content} onChange={this.handleInputChange} onSelectionChange={this.handleSelectionChange}/>
              </div>
              <div className="col-md-6" style={{paddingLeft: '0px'}}>
                <DockerfileAnalysis
                  dockerfile={this.state.content}
                  items={this.state.analysis}
                  onShowDocs={this.onShowDocs}
                  selectionStart={this.state.selectionStart}
                selectionStop={this.state.selectionStop} />

                <div id="analysis-footer">
                  <span id="results">{this.state.analysis.length} issue{this.state.analysis.length === 1 ? '' : 's'} found</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
