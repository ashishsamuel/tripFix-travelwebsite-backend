// logic to resolve the register request
exports.register = (req,res)=>{
    console.log("Inside register controller function");
    res.status(200).json("Register request received");
} 