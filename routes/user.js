const router = require("express").Router();
const passport = require("passport");

const userAuth = passport.authenticate("jwt", { session: false });

// profile route
router.get("/profile", userAuth, async (req, res) => {
    return res.json('Hello');
});

module.exports = router;