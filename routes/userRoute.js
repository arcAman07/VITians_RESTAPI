const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const signUpcontroller = require("../controllers/signUpcontroller");

// Post Request to store user Details

router.post("/signUp", signUpcontroller.postUser);

router.get("/signUp", signUpcontroller.getAllUsers);

router.get("/signUp/:id", signUpcontroller.getUser);

router.patch("/signUp/:id", signUpcontroller.patchUser);

router.delete("/signUp/:id", signUpcontroller.deleteUser);

router.post("/signUp/authenticate", signUpcontroller.authenticateUser);

module.exports = router;
