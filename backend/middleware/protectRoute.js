export const protectRoute=async(req,res,next)=>{
try {
    if(req.isAuthenticated() && req.user){
        // console.log(req.user,req.isAuthenticated())
        return next()
    }
    else{
        // console.log(req.isAuthenticated())
        return res.status(400).json({success:false,message:"You are not signed in. SignIn to access the features!"})
        
    }
} catch (error) {
    console.log("Error in protect Route",error.message)
}
}