const express = require("express");

const router = express.Router();

const signUpcontroller = require("../controllers/userController");

// Post Request to store user Details

router.post("/signUp", signUpcontroller.postUser);

router.get("/signUp", signUpcontroller.getAllUsers);

router.get("/signUp/:id", signUpcontroller.getUser);

router.patch("/signUp/:id", signUpcontroller.patchUser);

router.delete("/signUp/:id", signUpcontroller.deleteUser);

router.get("/signUp/Reg/:id", signUpcontroller.getUserByRegNo);

module.exports = router;
