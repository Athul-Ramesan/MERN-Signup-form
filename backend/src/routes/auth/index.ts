import { Router } from "express"
import { signupController } from "../../controllers"

export const routes = ()=>{
    const router = Router()

    router.route("/signup")
        .post(signupController)

    return router
}