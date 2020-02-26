import { TagsApiService } from '@/services/api'
import { TagModel } from '@/models'

const tags = {
  namespaced: true,
  state: {
    tags: []
  },

  getters: {
    getSortedByName: (state) => (sortAscending) => {
      const tags = state.tags.map(tag => new TagModel(tag)).sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })

      if (!sortAscending) {
        tags.reverse()
      }

      return tags
    }
  },

  mutations: {
    SET_TAGS: (state, tags) => {
      state.tags = tags
    },
    ADD_TAG: (state, tag) => {
      state.tags.push(tag)
    },
    REMOVE_TAG: (state, tag) => {
      state.tags.splice(state.tags.findIndex((t) => t.name === tag.name), 1)
    }
  },

  actions: {
    get: async ({ commit }) => {
      try {
        await commit('SET_TAGS', await TagsApiService.getTags())
      } catch (err) {
        console.warn('[vuex.tags] get', err)
      }
    },
    create: async ({ commit }, { tag }) => {
      try {
        const tagFromServer = await TagsApiService.create(tag)
        commit('ADD_TAG', tagFromServer)
      } catch (err) {
        console.warn('[vuex.tags] create', err)
      }
    },
    remove: async ({ commit }, { tag }) => {
      try {
        await TagsApiService.remove(tag)
        commit('REMOVE_TAG', tag)
      } catch (err) {
        console.warn('[vuex.tags] remove', err)
      }
    }
  }
}

export default tags
