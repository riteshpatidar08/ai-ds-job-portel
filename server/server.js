import express from 'express' ;
import dotenv from 'dotenv' ;
const app = express() ;
dotenv.config() ;


app.get('/' , (req,res)=>{
    res.send('homepage')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running ${process.env.PORT}`)
})