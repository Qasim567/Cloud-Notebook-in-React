const express = require ('express')
const router = express.Router()

router.get('/', (req, res)=>{
    // obj={
    //     a: 'notes',
    // }
    res.json([])
})

module.exports = router