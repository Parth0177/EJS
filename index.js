const express= require('express');
const app= express();
const PORT= 3001;
app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
  })
  app.set('view engine','ejs');
  app.get('/',(req,res)=>{
    res.render("home")
  })

