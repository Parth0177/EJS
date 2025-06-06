const express= require('express');
const app= express();
const PORT= 3001;
app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
  })
  app.use(express.static('public'));
  app.set('view engine','ejs');
  app.get('/',(req,res)=>{
    res.render("home")
  })
  app.get('/hello',(req,res)=>{
    res.send("Hello World")
  })

