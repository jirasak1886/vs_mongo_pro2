const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getrooms,getroomID, postrooms,updateroom,deleteroom } =require("../controller/roomController");

router.get('/rooms',authenticateToken,getrooms); // Get all products
router.get('/room/:id',authenticateToken,getroomID ); // Get a product by ID
router.post('/rooms',authenticateToken,postrooms); // Create a new product
router.put('/room/:id',authenticateToken,updateroom); // Update a product by ID
router.delete('/room/:id',authenticateToken,deleteroom);

module.exports = router;