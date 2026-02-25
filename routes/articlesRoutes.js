const express = require("express");
const router = express.Router();

const articlesController = require("../controllers/articlesController");

// 🔹 без middleware для страниц
router.get("/", articlesController.getArticles);
router.get("/:articleId", articlesController.getArticleById);

// 🔹 API оставляем защищённым
router.post("/", articlesController.createArticle);
router.put("/:articleId", articlesController.updateArticle);
router.delete("/:articleId", articlesController.deleteArticle);

module.exports = router;