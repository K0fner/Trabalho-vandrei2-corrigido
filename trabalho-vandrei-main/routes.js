const express = require("express")
const router = express.Router()
const mainController = require("./controllers/mainController")
const routes = require("./routes")
router.get("/", mainController.main)

router.get("/sobre/:id", mainController.sobre)

// 🆕 NOVA ROTA 1
router.get("/blog", (req, res) => {
    res.render("blog")
})

// 🆕 NOVA ROTA 2
router.get("/galeria", (req, res) => {
    res.render("galeria")
})

module.exports = router