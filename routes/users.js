const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router.post("/", usersController.postUser);
router.get("/", usersController.getUser);

router.delete("/delete/:id", usersController.deleteUser);
router.put("/edit/:id", usersController.editUser);

module.exports = router;
