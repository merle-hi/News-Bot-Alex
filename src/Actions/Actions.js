import {
  GET_NEWS_ITEMS,
  GET_NEWS_BY_CATEGORY,
  ADD_TO_CHAT,
  UPDATE_INDEX_COUNT,
  UPDATE_BUTTON_LINK,
  SET_HEADLINES,
  SET_FIRST_ARTICLE
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

export const getNewsByCategory = selectedCat => dispatch => {
  newsapi.v2
    .topHeadlines({ language: 'de', country: 'de', category: selectedCat })
    .then(response => {
      dispatch({ type: GET_NEWS_BY_CATEGORY, payload: response.articles })
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
          dispatch({ type: SET_HEADLINES, payload: myHeadlines })
        })
        .then(() => {
          let newArticle = myHeadlines[0]
          newArticle.sender = 'alex'
          dispatch({ type: SET_FIRST_ARTICLE, payload: newArticle })
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
