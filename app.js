const express=require('express'); // 3rd Party Package available in npm. 

const app=express();

// Middleware Code:
app.use((req,res,next)=>{
      
console.log("First-Middleware");
next(); // Goto Next Middleware. Thus response is not returned here.
});

app.use((req,res,next)=>{

console.log("Second-MiddleWare");
res.send('<h1>Returned Response </h1>');
// next() will not be called here because response has been sent.
});



// Middleware Code



app.listen(3000); 
// Creates a http-server as well as listen on Port:3000