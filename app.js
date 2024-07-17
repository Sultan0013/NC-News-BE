const express = require("express");
const app = express();
const {fetchAllTopics}  = require('./controllers/fetchAllTopics.controller');
const getALLapi = require('./Controllers/getAPI.controller')
const fetchArticelById = require("./Controllers/fetArticlesById.controller")
const getAllArticles = require('./Controllers/getAllArticles.controller')
const {selectCommentsByArticleId} = require('./Controllers/selectCommentsByArticleID.controller')

app.get('/api/topics', fetchAllTopics);

app.get('/api' ,getALLapi);

app.get('/api/articles/:article_id', fetchArticelById)

app.get('/api/articles', getAllArticles)

app.get('/api/articles/:article_id/comments' , selectCommentsByArticleId )

app.use((req, res, next) => {
    res.status(404).send({ msg: 'Route Not Found' });
});

app.use((error, req, res, next) => {
  if(error.status){
    res.status(error.status).send(error.msg)
  }
  res.status(500).send({ msg: 'Internal Srver Error' });
});

module.exports = app;
