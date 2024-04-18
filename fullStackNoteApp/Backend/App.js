import express from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser'

export const app = express();

app.use(cors({
    origin:process.env.ORIGIN
}))

app.use(cookieParser());
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))


import userRouter from "./src/routes/user.routes.js"
import noteRouter from "./src/routes/notes.routes.js"

app.use("/api/v1/users",userRouter)
app.use("/api/v1/logged/note",noteRouter)