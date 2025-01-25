const express = require("express") 
const router = express.Router()


const routes = [
    {
        path:'/auth',
        route:require("./auth.route")
    }
]

routes.forEach((cur)=>router.use(cur.path,cur.route))
module.exports = router