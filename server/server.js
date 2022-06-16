const express = require('express')
const app = express()

const PORT = process.env.PORT||3001

app.get("/api", (req, res)=>{
    res.json({"messege": "hello"})
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
