# Contributing to Dockerfilelint.com

Welcome, and thank you for your interest in contributing to Dockerfilelint.com!

There are many ways that you can contribute to the success of the website, be that bug fixing, testing or contributing to the underlying javascript tool [dockerfilelint](https://github.com/replicatedhq/dockerfilelint) which this site uses.

## Reporting Issues

Have you identified a reproducible problem in Dockerfilelint.com? Let us know, by opening an issue either on [GitHub](https://github.com/TheYorkshireDev/dockerfilelint.com/issues) or our primary host [GitLab](https://gitlab.com/TheYorkshireDev/dockerfilelint.com/issues). *Please Note:* This repository is for the website dockerfilelint.com so any issues that are related to the underlying tool [dockerfilelint](https://github.com/replicatedhq/dockerfilelint) will be closed and moved over there.

## Contributing

As mentioned above we would welcome contributors for the website. There are many ways to contribute to the Code project: logging bugs, submitting pull requests, reporting issues, and creating suggestions. We would also welcome contributions on the testing front. When we inherited the project there was a lack of unit tests and automated testing which we would like assistance in putting right.

### Branching

I have decided to use the branching model proposed by [@nvie](https://github.com/nvie) in his [blog post](http://nvie.com/posts/a-successful-git-branching-model/).

#### Reviewing and Merging a Feature
*Step 1.* Fetch and check out the branch for this merge request
```
git fetch origin
git checkout -b feature-T2 origin/feature-T2
```
*Step 2.* Review the changes locally
*Step 3.* Merge the branch and fix any conflicts that come up
```
git checkout develop
git merge --no-ff feature-T2
```
*Step 4.* Push the result of the merge to GitLab/GitHub
```
git push origin develop
```

#### Reviewing and Merging a Release
*Step 1.* Fetch and check out the branch for this merge request
```
git fetch origin
git checkout -b release/0.0.1 origin/release/0.0.1
```
*Step 2.* Review the changes locally
*Step 3.* Merge the branch to master
```
git checkout master
git merge --no-ff release/0.0.1
git tag -a 0.0.1
```
*Step 4.* Push the result of the merge to GitLab/GitHub
```
git push --follow-tags origin master
```
*Step 5.* Merge the branch into develop and fix any conflicts that come up
```
git checkout develop
git merge --no-ff release/0.0.1
```
*Step 6.* Push the result of the merge to GitLab/GitHub
```
git push origin develop
```

### Consistent Code Style
This project includes a `.editorconfig` file which I ask you to adhere too. The easiest way is just to use a modern editor, most of which have not added support for editor config and will change the code style settings by default upon detecting the `.editorconfig` file in the root of the repository. You may want to check your editors compatibility or just read up on the project at the EditorConfig [website](http://editorconfig.org).

# Thank You!
Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.
