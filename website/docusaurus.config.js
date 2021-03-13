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
        alt: 'Azure ML Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/cheatsheets/', label: 'Overview', position: 'left'},
        {to: 'docs/cheatsheets/python', label: 'Python SDK', position: 'left'},
        {to: 'docs/cheatsheets/cli', label: 'CLI (Preview)', position: 'left'},
        {to: 'docs/contributing', label: 'Contributing', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Reference',
          items: [
            {
              label: 'Microsoft docs',
              href: 'https://docs.microsoft.com/azure/machine-learning',
            },
            {
              label: 'Python SDK',
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
              label: 'Website',
              href: 'https://github.com/lostmygithubaccount/azureml-cheatsheets',
            },
            {
              label: 'Examples',
              href: 'https://github.com/Azure/azureml-examples',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft`,
    },
    algolia: {
      // search only api key: https://docsearch.algolia.com/docs/faq/#can-i-share-the-apikey-in-my-repo
      apiKey: '8cdd3d909edd00501899b929541d6ce7',
      indexName: 'azureml-web',
      searchParameters: {},
      placeholder: 'Search cheat sheet'
    }
  },
  plugins: [path.resolve(__dirname, 'plugins/appinsights')], // uncomment for appinsights
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/lostmygithubaccount/azureml-cheatsheets/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
