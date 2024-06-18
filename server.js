const express = require('express')
const app = express()
const cors require('cors')
const PORT = 8000

app.use(cors())

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

app.listen(process.env.PORT || PORT, () => {
    console.log("Your teas are here")
})


//can use a git ignore file instead following the instructions below.

//1) touch gitignore
//2) type node_modules in this file just as it is typed here.
//3) //watch leons class 38 vide starting at about 3:00


