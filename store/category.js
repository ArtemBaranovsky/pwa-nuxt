import * as types from '~/mutation-types'
import categoryTreeQuery from '~/apollo/queries/category/getCategoryTree.graphql'
import {SET_CATEGORY_TREE} from "~/mutation-types";

// STATE
export const state = () => ({
  tree: []
})
// GETTERS
export const getters = {
  tree: (state) => state.tree
}
// MUTATION - sync (commit)
export const mutations = {
  [types.SET_CATEGORY_TREE](state, payload) {
    state.tree = payload
  }
}
// ACTION - async (dispatch)
export const actions = {
  async setCategoryTree({commit, rootGetters, dispatch, state}) {
    const gql = this.app.apolloProvider.defaultClient;

    try {
      let {data} = await gql.query({
        query: categoryTreeQuery,
        variables: {
          filters: {
            ids: {
              in: [rootGetters["rootCategoryId"]]
            }
          }
        }
      })

      // если ожидается много одновременных асинхронных запросов
/*      await Promise.all([
        ... // все данные запрсов будут доступны здесь
      ])*/

      if (data && Array.isArray(data.categoryList) && data.categoryList[0].children) {
        return commit(types.SET_CATEGORY_TREE, data.categoryList[0].children)
      }

      throw new Error('It\'s not good');
    } catch (e) {
      console.log(e);
    }
  }
}
