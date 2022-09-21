const JWT = require("jsonwebtoken");

// Auth Middleware
const requireAuth = (req, res, next) => {
  const token = req.cookies["auth-cookie"];
  if (token) {
    JWT.verify(token, "big brains", (err, decodedToken) => {
      if (err) {
        res.json({ status: "Invalid JWT Attached!" });
      }
      next();
    });
  } else {
    res.json({ status: "No JWT Attached!" });
  }
};


module.exports = {requireAuth}