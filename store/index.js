import * as types from '~/mutation-types'
import storeConfigQuery from '~/apollo/queries/common/getStoreConfig.graphql'

// STATE
export const state = () => ({
  storeConfig: {}
})
// GETTERS
export const getters = {
  storeConfig: (store) => store.storeConfig,
  rootCategoryId: (store) => (store.storeConfig && store.storeConfig.root_category_id) ? store.storeConfig.root_category_id : null,
  logoSrc: (store) => (store.storeConfig && store.storeConfig.header_logo_src) ? store.storeConfig.header_logo_src : null
}
// MUTATION - sync (commit)
export const mutations = {
  [types.SET_STORE_CONFIG](state, payload) {
    state.storeConfig = payload
  }
}
// ACTION - async (dispatch)
export const actions = {
  async nuxtServerInit({dispatch, commit, store, getters}) {
    await Promise.all([
      dispatch('setStoreConfig')
    ])
  },
  async setStoreConfig({commit, dispatch, state}) {
    const gql = this.app.apolloProvider.defaultClient

    try {
      const {data} = await gql.query({
        query: storeConfigQuery
      })
      if (data && data.storeConfig) {
        commit(types.SET_STORE_CONFIG, data.storeConfig)
      }
    } catch (e) {
      console.error(e);
    }
  }
}
