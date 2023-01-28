const isAdmin = (req, res, next) => {
   console.log(req.user.isAdmin)
  if (!req.user.isAdmin) {
   return res.status(403).send({ error: "You are not an Admin User" });
  }
  next();
};

module.exports = {isAdmin};
