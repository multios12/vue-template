import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => res.sendfile("../public/index.html"));

module.exports = router;
