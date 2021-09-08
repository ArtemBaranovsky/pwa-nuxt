export default async function(ctx) {
  if (ctx.route.name === 'magento') {
    const path = ctx.route.path.replace('/*\//','')
    const { data } = await ctx.app.apolloProvider.defaultClient.query({
      query: require('~/apollo/queries/common/urlResolver.graphql'),
      variables: {
        url: path
      }
    })

    if (data && data.urlResolver) {
      data.urlResolver.type = data.urlResolver.type.toLowerCase()
    }

    ctx.urlResolver = data.urlResolver
  }
}
