const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

// middleware
const basicAuth = require("../middlewares/auth.middleware");
const validateUser = require("../middlewares/validateUser.middleware");

// routes

router.get("/", usersController.getUsers);
router.get("/:userId", usersController.getUserById);

router.post(
  "/",
  basicAuth,
  validateUser,
  usersController.createUser
);

router.put("/:userId", basicAuth, usersController.updateUser);

router.delete("/:userId", basicAuth, usersController.deleteUser);

module.exports = router;