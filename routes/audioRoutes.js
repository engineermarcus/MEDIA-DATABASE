const express = require('express');
const fs = require('fs');
const path = require('path');
const audioDir = path.join(__dirname,'..','public','audio');
const router = express.Router();

router.get('/audio',(req,res)=>{
	fs.readdir(audioDir,(err,files)=>{
		if(err){
			res.status(500).json({ Error: "No such file or directory" });
		}
		const audioFile = files.filter(file => {
			return file.endsWith("mp3");

		});
		const filePaths = audioFile.map(file => '/media/audio');
		res.json(filePaths);
	});

});
module.exports = router; 
