const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const  rappers={
    'olamide':{
    'age':31,
    "birthName":"Olamide Gbenga Adedeji ",
    'birthLocation':"Nigeria"},

    'Ladipoe':{
        'age':31,
        "birthName":"Ladipo Eso ",
        'birthLocation':"Nigeria"},

        'MI':{
            'age':31,
            "birthName":"Jude Lemfani Abaga",
            'birthLocation':"Nigeria"},


        'DYlon':{
            'age':'notfound',
            "birthName":'notfound',
            'birthLocation':'notfound'},
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')//dirname, wherever a file is located, that's where you start looking for a file.)

})
//to create an api
app.get('/api:rapperName',(request,response)=>{
  const rappersName= request.params.rapperName.toLowerCase()//query parameter from request
{}
    if (rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['Dylon'])   
    }


})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})//reason for this is because of heroku's port
