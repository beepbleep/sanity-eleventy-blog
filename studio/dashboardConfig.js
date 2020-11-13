export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fae2faf5ece486fe61bf41a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-vupion3c',
                  apiId: 'cf91bc33-5161-4d8b-ba4c-168ede7b5657'
                },
                {
                  buildHookId: '5fae2fb00dd24d7360e6bbf6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1diczhbf',
                  apiId: 'a70b9410-08bd-4f28-93a5-8c276cd58334'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beepbleep/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1diczhbf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
