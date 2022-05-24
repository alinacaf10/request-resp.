const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")

const app=express()

const data=[
    {   'id':27 , name: 'Adler'},
    {   'id':7 , name: 'Semmame'},
    {   'id':47 , name: 'Buke'}
]
const cards=[
    {'id':2, 'card_num':1},
    {'id':3, 'card_num':12},
    {'id':4, 'card_num':123},
    {'id':5, 'card_num':12345}
]

app.get("/", function(request, response){
response.send("hello world")
})
app.get("/about", function(request,response){
    response.send("It Is an about page")
})
app.get("/date",function(request,response){
    const newDate=new Date().toLocaleTimeString()
    response.send(newDate.toString())
})

app.get("/lsit/:id",function(request,response){
    let company = data.find((elem)=>(elem.id==request.params.id))
    if(company){
        request.status(200).json(company)
        response.send(company.name)
    }
    else{
        response.status(400).json('Data was not found')
    }
    // console.log(request.params.id)
})
app.get("/host", function(request,response){
    response.status(200).json(request.hostname)
})
app.get('card/:id',function(req,res){
    let data = cards.find((elem)=>elem.id==req.params.id.card_num)
    if(data){
        res.status(200).json(data)
    }
    res.status(400).json('melumat yoxdur')
})
app.listen(3000, function(){
    console.log("server is on localhost:3000")
})