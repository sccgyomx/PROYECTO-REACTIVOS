import express from "express"
import "dotenv/config"
import cors from "cors"
import { router } from "./routes"
import { dbConnect } from "./config/mongo"
import { preguntarAOpenAI } from "./services/openai.service"


const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

dbConnect().then(() => {
    console.log("Conexion exitosa a la base de datos!!!");
}).catch(() => {
    console.log("error de conexion a la base de datos!!!");
})

app.listen(PORT, () => listenTo(PORT))

function listenTo(port: any) {
    console.log("🚀 ~ Escuchando ~ PORT:", port)
}