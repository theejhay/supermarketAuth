const router = require("express").Router();
const AccessControl = require("../middlewares/roles/AccessControl");

// get all categories
router.get("/", AccessControl(['all']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// add new category
router.post("/add", AccessControl(['superadmin', 'employee']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// update category
router.put("/update", AccessControl(['superadmin', 'employee']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

// delete category
router.put("/delete", AccessControl(['superadmin', 'employee']), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "You are allowed to access this route"
    })
});

module.exports = router;