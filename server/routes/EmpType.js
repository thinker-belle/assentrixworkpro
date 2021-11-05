const express = require('express')
const router = express.Router()
const {EmpType} = require ("../models");

router.get("/",async (req,res)=>{
    const emptypeList = await EmpType.findAll();
    res.json(emptypeList);
});

router.post("/", async(req,res)=>{
    const emptype = req.body;
    await EmpType.create(emptype);
    res.json(emptype);
})

module.exports = router;