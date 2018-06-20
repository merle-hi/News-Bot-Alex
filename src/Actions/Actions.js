import {
  GET_NEWS_ITEMS,
  ADD_TO_CHAT,
  UPDATE_INDEX_COUNT,
  UPDATE_BUTTON_LINK,
  SET_HEADLINES
} from './types'

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('f2e9267756a64e498d902165b4957062')

const myHeadlines = []

export const getNewsItems = () => dispatch => {
  newsapi.v2.topHeadlines({ language: 'de', country: 'de' }).then(response => {
    dispatch({ type: GET_NEWS_ITEMS, payload: response.articles })
    const newsItems = response.articles
    return Promise.all(newsItems.map(article => ({ ...article })))
      .then(() => {
        let random = Math.round(Math.random() * 18)
        for (let i = 0; i < 3; i++) {
          let newHeadline = response.articles[random + i - 1]
          myHeadlines.push(newHeadline)
        }
      })
      .then(() => {
        dispatch({
          type: SET_HEADLINES,
          payload: myHeadlines
        })
      })
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
