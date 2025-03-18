const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const imagesDir = path.join(__dirname,'..','public','images');
router.get('/images',(req,res) => {
	fs.readdir(imagesDir,(err,files)=>{
		if(err){
			res.status(500).json({ Error: "No such file or Directory"});
		}
		const imageFiles = files.filter(file => {
			return file.endsWith("jpg") || file.endsWith("png") || file.endsWith("gif") || file.endsWith("jpeg");
		});
		const filePaths = imageFiles.map(file => `/media/images/${file}`);
		res.json(filePaths);

	});
});
module.exports = router; 
