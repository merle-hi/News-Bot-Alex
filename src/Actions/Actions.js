import {
  GET_NEWS_ITEMS,
  ADD_TO_CHAT,
  UPDATE_INDEX_COUNT,
  UPDATE_BUTTON_LINK
} from './types'

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('f2e9267756a64e498d902165b4957062')

export const getNewsItems = () => dispatch => {
  newsapi.v2.topHeadlines({ language: 'de', country: 'de' }).then(response => {
    let newsItemList = response.articles.map(news => ({
      ...news
    }))
    dispatch({ type: GET_NEWS_ITEMS, payload: newsItemList })
  })
}

export const addToChat = chatMessage => dispatch => {
  dispatch({ type: ADD_TO_CHAT, payload: chatMessage })
}

export const updateIndexCount = () => dispatch => {
  dispatch({ type: UPDATE_INDEX_COUNT })
}

export const updateButtonLink = link => dispatch => {
  dispatch({ type: UPDATE_BUTTON_LINK, payload: link })
}
