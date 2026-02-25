const articles = [
  { id: 1, title: "Node.js basics" },
  { id: 2, title: "Express middleware" },
  { id: 3, title: "Template engines" },
];

exports.getArticles = (req, res) => {
  res.render("articles/articles.ejs", { articles });
};
exports.createArticle = (req, res) => {
  res.send("Post articles route");
};

exports.getArticleById = (req, res) => {
  const articleId = Number(req.params.articleId);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return res.send("Article not found");
  }

  res.render("articles/article.ejs", { article });
};

exports.updateArticle = (req, res) => {
  res.send(`Put article by Id route: ${req.params.articleId}`);
};

exports.deleteArticle = (req, res) => {
  res.send(`Delete article by Id route: ${req.params.articleId}`);
};