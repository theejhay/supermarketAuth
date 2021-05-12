const router = require("express").Router();

// profile route
router.get("/profile", async (req, res) => {
    return res.json('Hello');
});

module.exports = router;