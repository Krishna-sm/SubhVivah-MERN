const {default:httpStatus} = require("http-status");
const { AuthService } = require("../services");
const CatchAsync = require("../utils/CatchAsync");
class AuthController{

    static registerUser = CatchAsync(async(req,res)=>{
        const res_obj =await AuthService.registerUser(req.body)
         res.status(httpStatus.CREATED).json(res_obj);
    })
    static loginUser = CatchAsync(async(req,res)=>{
        const res_obj =await AuthService.loginUser(req.body)
         res.status(httpStatus.OK).json(res_obj);
    })


    
    // static async registerUser(req,res){

    //         // email ,name,password
    //         const res_obj =await AuthService.registerUser(req.body)
    //         res.status(httpStatus.CREATED).json(res_obj);

    //     //register logic here
         
    // }
}

module.exports = AuthController;