//We create a new router
const router = require('express').Router()//Check
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
//This variable will be changing
let db = require('../db/db.json')
//  console.log(uuidv4()) this is how we generate the id number
router.get('/notes', (req,res)=> {
  
    res.json(db)
    
})

router.post('/notes', (req,res)=>{
    //This is how we add  the id to the note
    console.log(req.body);
    req.body.id= uuidv4()
    //push the req body into the array of notes in the db
    db.push(req.body);
    //after tat, the db variabele will have the new note
    //we need to rerite the json file with the new note using fs
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        if (err) throw err 
        console.log('this file has been saved')
    } );
    res.json(req.body);
    //refer to the README assignment for that
})


module.exports = router
