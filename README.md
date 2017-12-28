# Dockerfilelint Online ([dockerfilelint.com](https://www.dockerfilelint.com/)) 

[Dockerfilelint.com](https://www.dockerfilelint.com/) is a client javascript site to review and analyze a Dockerfile for common mistakes and use of best practices. 

**Note:** This repository has evolved from the original project [replicatedhq/fromlatest.io](https://github.com/replicatedhq/fromlatest.io), a special thanks to everyone over there who created this excellent website. Unfortunately, it has not been updated in a long time and therefore their website ([fromlatest.io](https://www.fromlatest.io/)) is using an outdated version of [Dockerfilelint](https://github.com/replicatedhq/dockerfilelint).

## Prerequisites

To build and run locally you will need the following installed:
* Git
* Make
* Node
* NPM
* Grunt & Grunt-Cli
* Babel

## Installation

On Ubuntu:
```bash
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install build-essential nodejs
sudo npm install -g grunt-cli babel
npm install
```

## Build & Run

You can choose to build and run the website on your host machine providing you have installed all the prerequisites (you will likely have most installed).

### Host Machine

- `make clean`
- `make deps`
- `make run`

The frontend will then be hosted at `http://127.0.0.1:5000/`

## Contributions

I encourage community support on this project but please note [GitLab](https://gitlab.com/explore/projects/trending) is the primary host of this project. Having said that feel free to use GitHub to contribute even though I suggest giving GitLab a try 😉. The GitLab stream is mirrored on GitHub and any merge requests from GitHub will be merged into the GitLab stream. Steve Perkins has an excellent [blog post](https://steveperkins.com/migrating-projects-from-github-to-gitlab/) outlining his decisions for moving to GitLab and describes the way I manage the two hosting providers with *Option 1: Create Separate Named Remotes.*

If you're curious these are a few links to the GitLab repository

* [Development Repository](https://gitlab.com/TheYorkshireDev/dockerfilelint.com)
* [Report Issues on GitLab](https://gitlab.com/TheYorkshireDev/dockerfilelint.com/issues)
* [Repository CI & CD](https://gitlab.com/TheYorkshireDev/dockerfilelint.com/pipelines)
