const express = require('express')
const app = express()
const PORT = 8000


const teas = {
    'emerald banana tea': {
    'teaName': "Emerald Banana Tea(翠衣香蕉茶)",
    'ingredients': ["banana: 200grams", "watermelon peel: 100grams"],
    'seasoning': "an appropiate amount of crystal sugar"
}
}
 



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:teaName', (request,response) => {
    const namesOfTeas = request.params.teaName.toLowerCase()

    if(teas[namesOfTeas]){
        response.json(teas[namesOfTeas])
    }else{
        response.json(teas['this tea is unvailable'])
    }
    
    
})

app.listen((PORT), () => {
    console.log("Your teas are here")
})


