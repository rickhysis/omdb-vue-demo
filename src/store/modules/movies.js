import axios from 'axios'

export default {
  namespaced: true,
  state: {
    movies: []
  },
  mutations: {
    getMovies (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    async getMovies ({ commit }, payload) {
      const { s, y, type, page, scroll } = payload
      const { data } = await axios.get(
        `https://www.omdbapi.com/`, {
          params: {
            apikey: '13630481',
            page,
            type,
            s,
            y
          }
        }
      )

      console.log(scroll)
      commit('getMovies', data.Search)
    }
  }
}
