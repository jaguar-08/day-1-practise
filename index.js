import express from "express"

const app = express()
const PORT = 4000

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello"})

})
app.get('/get-data',(req,res)=>{
    res.status(200).json({message:"data",data:{name:"sibi"}})

})





app.listen(PORT,()=>{
    console.log(`app is running in port =${PORT}`)
})