import { GET_NEWS_ITEMS, GET_NEW_ARTICLE } from './types'

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

export const getNewArticle = myArticle => dispatch => {
  dispatch({ type: GET_NEW_ARTICLE, payload: myArticle })
}
