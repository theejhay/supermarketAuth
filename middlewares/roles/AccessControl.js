// Access Control
module.exports = (permissions) => {
    return (req, res, next) => {
    const userRole = req.user.role;
    if (permissions.includes(userRole) || permissions.includes('all')) {
        next()
    } else {
        return res.status(401).json({
            status: false,
            message: "You don't have permission to access this route"
        })
    }
}
};