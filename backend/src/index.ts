import express, {Application, NextFunction, Request, Response} from "express"
import {config} from "dotenv"
import cors from "cors"
import { dbConnect } from "./config/db"
import { routes } from "./routes/auth"

config()
const app: Application = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
const clientUrl = process.env.CLIENT_URL
app.use(cors({
    origin: clientUrl,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))

app.use("/", routes())

dbConnect()
const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log("app is listening on port 3000")
})