const express = require('express');

const app = express();

const port = 3001;

const getHomePage = ()=>{

app.get('/',(request,response)=>{

response.send('hello from the home page')

})

}



// call the homePage function

getHomePage()
app.listen(port,()=>{
    console.log(`i am listening on port: ${port}, but i am also listening to you!!`)
})