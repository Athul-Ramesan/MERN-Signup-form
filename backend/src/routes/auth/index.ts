import { Router } from "express"
import { getUser, signupUser } from "../../controllers"

export const routes = ()=>{
    const router = Router()

    router.route("/signup")
        .post(signupUser)
    router.route("/user/:id")
        .get(getUser)
        
    return router
}