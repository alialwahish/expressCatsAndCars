var express = require('express');

var app = express();

app.get('/cats',function(request,response){
    content="<h1>Cats</h1><br>"
    content+='<img src="/images/cat1.jpeg" alt="">'
    content+='<img src="/images/cat2.jpeg" alt="">'

    content+="<h2>added 2 pics</h2>"
    response.send(content)
})

app.get('/cars',function(request,response){
    content="<h1>Cars</h1><br>"
    content+='<img src="/images/car1.jpeg" alt="">'
    content+='<img src="/images/car2.jpeg" alt="">'

    content+="<h2>added 2 pics</h2>"
    response.send(content)
})

app.get('/form',function(request,response){
    content="<h1>Forms</h1><br>"
    content+='<form action="">Email<input type="text">Password <input type="text"></form>'
    response.send(content)
})




app.use(express.static(__dirname+"/static"));
app.listen(8000,function(){
    console.log("listing to port 8000")
})