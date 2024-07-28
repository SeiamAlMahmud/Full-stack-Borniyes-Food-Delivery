import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"




// app config
const app = express()
const port = process.env.PORT || 3000


// middleware
app.use(express.json())
app.use(cors())

// DB Connection
// connectDB()

//api endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))



app.get("/",(req,res)=> {
    res.send("Hello Word")
})

app.listen(port, ()=> {
    console.log(`port start on ${port}`)
})


// mongodb+srv://<username>:<password>@first-project.dkbbjak.mongodb.net/?retryWrites=true&w=majority&appName=First-Project