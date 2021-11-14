import express from "express"
import { databaseConfig } from "./src/configuration/database.js"
import router from "./src/configuration/routes.js"

const app = express()

app.use(express.json())
app.use(router)


databaseConfig()

app.listen(3900, async() => {
    try{
        console.log("server is running")
    } catch(err){
        console.log(err)
    }
})