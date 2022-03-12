const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.send({text:"hi"});
})

router.post('/', (req,res) => {
 const {inputValue1, inputValue2, inputValue3, inputValue4} = req.body;
 console.log(inputValue1,inputValue2,inputValue3,inputValue4)
 return  res.send({message:"registered!"});
})

module.exports = router;