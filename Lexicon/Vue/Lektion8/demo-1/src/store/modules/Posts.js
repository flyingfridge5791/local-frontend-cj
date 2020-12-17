import axios from 'axios'

export default {
  state: {
    posts: []
  },
  getters: {
    posts: state => state.posts
  },
  mutations: {
    SET_POSTS: (state, _posts) => {
      state.posts = _posts
    }
  },
  actions: {
    getPosts: async ({commit}) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('SET_POSTS', res.data)
    }
  }
}