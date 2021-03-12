const path = require('path');

module.exports = {
  title: 'Azure Machine Learning',
  tagline: 'Cheat sheets for Azure Machine Learning',
  url: 'https://github.com/lostmygithubaccount/',
  baseUrl: '/azureml-cheatsheets/',
  onBrokenLinks: 'ignore',
  favicon: 'img/logo.svg',
  organizationName: 'lostmygithubaccount', // Usually your GitHub org/user name.
  projectName: 'azureml-cheatsheets', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Azure Machine Learning',
      logo: {
        alt: 'AML Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/cheatsheet/', label: 'Cheat Sheet', position: 'left'},
        {to: 'docs/vs-code-snippets/snippets', label: 'Snippets', position: 'left'},
        // {to: 'docs/templates/', label: 'Templates', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {href: 'https://github.com/Azure/azureml-web', label: 'GitHub', position: 'right',
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Reference',
          items: [
            {
              label: 'Microsoft Docs',
              href: 'https://docs.microsoft.com/azure/machine-learning',
            },
            {
              label: 'API Documentation',
              href: 'https://docs.microsoft.com/python/api/overview/azure/ml/?view=azure-ml-py'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Azure/azureml-examples/issues',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.microsoft.com/questions/tagged/10888',
            }
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'Website Repo',
              href: 'https://github.com/lostmygithubaccount/azureml-cheatsheets',
            },
            {
              label: 'Azure ML Examples Repo',
              href: 'https://github.com/Azure/azureml-examples',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft`,
    },
  },
};
