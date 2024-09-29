import express from "express";

const app=express()
app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello this is node express server"})
})

app.listen(3000,()=>{

    console.log("our server is listening on http//localhost:3000")
})