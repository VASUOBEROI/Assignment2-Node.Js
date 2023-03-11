const express=require('express'); // 3rd Party Package available in npm. 

const app=express();


// This Route Handler is responsible for Handling all the routes that starts with /users/so-on
app.use('/users',(req,res,next)=>{

res.send('<h1>Hi from Users. Welcome to Users Page.</h1>');

});

// Order of / should be last because otherwise it run for every request
// This will be responsible for all routes starting with '/'.
app.use('/',(req,res,next)=>{
res.send('<h1>Hi from Nothing.Welcome to Main Page.</h1>');
});



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