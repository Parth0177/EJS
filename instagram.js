const express= require('express');
const app=express();
const PORT=5005;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
  
})

app.set('view engine', 'ejs');

app.get('/ig/:username',(req,res)=>{
  let {username}= req.params;
  res.render('insta',{username:username});
  
})