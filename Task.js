const express= require('express');
const app=express();
const PORT=5007;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
  
})

app.set('view engine', 'ejs');

app.get('/ig/:username',(req,res)=>{
  let {username} = req.params;
  
  const instaData = require('./data.json')
  const data = instaData[username]
  if(data){
      res.render('task1',{data});
  }else{
    res.render('error')
  }
  
  
})