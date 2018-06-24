import {
  GET_NEWS_BY_CATEGORY,
  ADD_TO_CHAT,
  UPDATE_INDEX_COUNT,
  UPDATE_BUTTON_LINK,
  SET_HEADLINES,
  SET_CATEGORY
} from '../Actions/types'

export default (state, action) => {
  switch (action.type) {
    case GET_NEWS_BY_CATEGORY:
      return { ...state, newsItems: action.payload }

    case ADD_TO_CHAT:
      if (state.newsMessageIndex < 19) {
        return {
          ...state,
          myChat: [...state.myChat, action.payload],
          status: 'news'
        }
      } else {
        return { ...state, newsMessageIndex: 0, status: 'end' }
      }
    case UPDATE_INDEX_COUNT:
      return { ...state, newsMessageIndex: state.newsMessageIndex + 1 }

    case UPDATE_BUTTON_LINK:
      return { ...state, buttonLink: action.payload }

    case SET_HEADLINES:
      return { ...state, myHeadlines: action.payload }

    case SET_CATEGORY:
      return { ...state, selectedCategory: action.payload }
    default:
      return state
  }
}
