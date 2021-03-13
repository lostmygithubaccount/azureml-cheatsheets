# Azure Machine Learning cheat sheets

[![deploy](https://github.com/lostmygithubaccount/azureml-cheatsheets/workflows/deploy/badge.svg)](https://github.com/lostmygithubaccount/azureml-cheatsheets/actions?query=workflow%3Adeploy)

Website is available here: https://lostmygithubaccount.github.io/azureml-cheatsheets/

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

##  Contributions

Make PRs against the `main` branch.

```bash
git clone git@github.com:lostmygithubaccount/azureml-cheatsheets.git
cd azureml-examples
git checkout -b user/contrib
...
gh pr create
```

- When a PR arrives against `main` GitHub actions (deploy) will test the build is successful
- When the PR is merged the change will be automatically deployed to `gh-pages` branch (and the webpage will be updated)

See the [Contributing Guide](https://lostmygithubaccount.github.io/azureml-cheatsheets/docs/contributing) for details.

## Deployment

This repo has GitHub actions in place that automate deployment by watching the `website` branch.
If you are interested in how deployment works then read on!

### GitHub Actions

We use GitHub actions to automate deployment. Set up was as follows:

- Generated new SSH key (e.g. to `/tmp/.ssh/id_rsa`)
- Add public key to repo's [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/)
    - Allow write access
    - `xclip -sel clip < /tmp/.ssh/id_rsa.pub`
- Add private key as [GitHub secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
    - We use repo-level (not org level) secret
    - Secret is named `GH_PAGES_DEPLOY`
    - `xclip -sel clip < /tmp/.ssh/id_rsa`

### Manual

It is possible to make manual deployments without use of the GitHub action above.

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). Please see the [code of conduct](CODE_OF_CONDUCT.md) for details.
