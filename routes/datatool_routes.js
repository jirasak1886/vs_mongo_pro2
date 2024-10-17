const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getdatatools,getdatatoolID,postdatatool,updatedatatool,deletedatatool } =require("../controller/datatool_controller");

router.get('/dtools',authenticateToken,getdatatools); // Get all products
router.get('/dtool/:id',authenticateToken,getdatatoolID ); // Get a product by ID
router.post('/dtools',authenticateToken,postdatatool); // Create a new product
router.put('/dtool/:id',authenticateToken,updatedatatool); // Update a product by ID
router.delete('/dtool/:id',authenticateToken,deletedatatool);

module.exports = router;