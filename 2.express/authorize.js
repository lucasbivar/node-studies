const authorize = (req, res, next) => {
  const {user} = req.query;
  if(user === "lucas"){
    //with the user is authorized, go to the next middleware or route
    req.user = {name: "lucas", id:3}
    next()
  }else{
    res.status(401).send("Unauthorized")
  }
}

module.exports = authorize;