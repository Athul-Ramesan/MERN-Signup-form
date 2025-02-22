import { Router } from "express"
import { signupUser } from "../../controllers"

export const routes = ()=>{
    const router = Router()

    router.route("/signup")
        .post(signupUser)

    return router
}