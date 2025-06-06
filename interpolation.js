const express=require('express');
const app= express();
const PORT=5004;

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`)
})

app.set('view engine','ejs');
app.get('/',(req,res)=>{
  res.render('interpolation')
})

app.get('/rolldice',(req,res)=>{
  let dicevalue=  Math.floor(Math.random()*6)+1
  res.render('rolldice', {num:dicevalue})
})