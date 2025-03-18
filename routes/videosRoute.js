const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const vidDir = path.join(__dirname,'..','public','videos');
router.get('/videos',(req,res)=>{
	fs.readdir(vidDir, (err,files)=>{
		if(err){
			res.status(500).json({ Error: "An Error Occurred!"});
		}
		const videoFile = files.filter(file => {
			return file.endsWith("mp4");
		});
		const filePaths = videoFile.map(file => `/media/videos/${file}`);
		res.json(filePaths);
	});
});
module.exports = router; 
