import {
  GET_NEWS_ITEMS,
  GET_NEWS_BY_CATEGORY,
  ADD_TO_CHAT,
  UPDATE_INDEX_COUNT,
  UPDATE_BUTTON_LINK,
  SET_HEADLINES,
  SET_FIRST_ARTICLE
} from '../Actions/types'

export default (state, action) => {
  switch (action.type) {
    case GET_NEWS_ITEMS:
      return { ...state, newsItems: action.payload }
    case GET_NEWS_BY_CATEGORY:
      return { ...state, newsItems: action.payload }
    case ADD_TO_CHAT:
      if (state.index < 19) {
        return {
          ...state,
          myNewsChat: [...state.myNewsChat, action.payload],
          status: 'news'
        }
      } else {
        return { ...state, index: 0, status: 'end' }
      }
    case UPDATE_INDEX_COUNT:
      return { ...state, index: state.index + 1 }

    case UPDATE_BUTTON_LINK:
      return { ...state, buttonLink: action.payload }

    case SET_HEADLINES:
      return { ...state, myHeadlines: action.payload }
    case SET_FIRST_ARTICLE:
      return {
        ...state,
        myNewsChat: [...state.myNewsChat, action.payload],
        status: 'news'
      }
    default:
      return state
  }
}
