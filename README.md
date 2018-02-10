# Dockerfilelint Online ([dockerfilelint.com](https://www.dockerfilelint.com/)) 

[![pipeline status](https://gitlab.com/TheYorkshireDev/dockerfilelint.com/badges/develop/pipeline.svg)](https://gitlab.com/TheYorkshireDev/dockerfilelint.com/commits/develop) [![GitHub release](https://img.shields.io/github/release/theyorkshiredev/dockerfilelint.com.svg)](https://github.com/theyorkshiredev/dockerfilelint.com/releases) [![license](https://img.shields.io/github/license/theyorkshiredev/dockerfilelint.com.svg)](https://github.com/theyorkshiredev/dockerfilelint.com/blob/master/LICENCE)

[Dockerfilelint.com](https://www.dockerfilelint.com/) is a client javascript site to review and analyze a Dockerfile for common mistakes and use of best practices. 

**Note:** This repository has evolved from the original project [replicatedhq/fromlatest.io](https://github.com/replicatedhq/fromlatest.io), a special thanks to everyone over there who created this excellent website. Unfortunately, it has not been updated in a long time and therefore their website ([fromlatest.io](https://www.fromlatest.io/)) is using an outdated version of [Dockerfilelint](https://github.com/replicatedhq/dockerfilelint).

## Websites

* Latest Release: [www.dockerfilelint.com](https://www.dockerfilelint.com)
* Next Release Candidate: [beta.dockerfilelint.com](https://beta.dockerfilelint.com)
* Development Branch: [alpha.dockerfilelint.com](https://alpha.dockerfilelint.com)

## Prerequisites

To build and run locally you will need the following installed:
* Git
* Make
* Node
* NPM
* Grunt & Grunt-Cli
* Babel

Alternatively, if you have docker installed build and run within a container (see below).

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

You can choose to build and run the website on your host machine providing you have installed all the prerequisites (you will likely have most installed). Or, you can build using docker and run the image to serve the website.

**Note**: building through docker does mean you cannot take use of the hot module replacement and you will need to rebuild the image to see any code changes take affect.

### Host Machine

- `make clean`
- `make deps`
- `make run`

The frontend will then be hosted at `http://127.0.0.1:5000/`

### Docker

#### Build Docker Image
```bash
docker build -t dockerfilelint.com .
```

#### Run Container
```bash
docker run -it --name dockerfilelint.com -p 5000:5000 dockerfilelint.com
```

## Contributions

I encourage community support on this project but please note [GitLab](https://gitlab.com/explore/projects/trending) is the primary host of this project. Having said that feel free to use GitHub to contribute even though I suggest giving GitLab a try 😉. The GitLab stream is mirrored on GitHub and any merge requests from GitHub will be merged into the GitLab stream. Steve Perkins has an excellent [blog post](https://steveperkins.com/migrating-projects-from-github-to-gitlab/) outlining his decisions for moving to GitLab and describes the way I manage the two hosting providers with *Option 1: Create Separate Named Remotes.*

If you're curious these are a few links to the GitLab repository

* [Development Repository](https://gitlab.com/TheYorkshireDev/dockerfilelint.com)
* [Report Issues on GitLab](https://gitlab.com/TheYorkshireDev/dockerfilelint.com/issues)
* [Repository CI & CD](https://gitlab.com/TheYorkshireDev/dockerfilelint.com/pipelines)
