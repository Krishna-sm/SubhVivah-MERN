const express = require("express") 
const router = express.Router()


const routes = [
    {
        path:'/test',
        route:require("./test.route")
    }
]

routes.forEach((cur)=>router.use(cur.path,cur.route))
module.exports = router