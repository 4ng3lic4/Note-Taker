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
    req.body.id= uuidv4()
    //push the req body into the array of notes in the db
    //after tat, the db variabele will have the new note
    //we need to rerite the json file with the new note using fs
    //refer to the README assignment for that
})


module.exports = router
