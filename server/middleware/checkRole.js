
const checkRole = (...allowedRole) => {
console.log(allowedRole)
return async (req,res,next) => {
  if(req.user && allowedRole.includes(req.user.role)){
    next()
  }else{
    res.status(403).json({
        message : "your role is not allowed to access this resource"
    })
  }
}
}

export default checkRole