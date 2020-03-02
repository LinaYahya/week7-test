const express = require("express");

const router = express.Router();

const getCities = require('../database/queries/getCities');
const addCity = require('../database/queries/addCity');

router.get('/cities' , (req, res)=>{
  getCities().then((result) => res.json(result.rows))
})

router.post('/add-city' , (req, res) => {
  addCity(req.body).then(()=>res.redirect('/'))
})

module.exports = router;
