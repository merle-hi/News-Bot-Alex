import { GET_NEWS_ITEMS, GET_NEW_ARTICLE } from '../Actions/types'

export default (state, action) => {
  switch (action.type) {
    case GET_NEWS_ITEMS:
      return { ...state, newsItems: action.payload }
    case GET_NEW_ARTICLE:
      if (state.index < 20) {
        return {
          ...state,
          myNewsItems: [...state.myNewsItems, action.payload],
          index: state.index + 1
        }
      } else {
        return { ...state, index: 0 }
      }

    default:
      return state
  }
}
