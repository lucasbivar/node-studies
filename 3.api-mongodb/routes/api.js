const express = require("express")
const router = express.Router()

const Profile = require("../models/Profile")

router.get("/profile", async (req, res)=>{
	try {
		const profiles = await Profile.find();
		return res.status(200).json({
			success: true, 
			data: profiles
		})
	}catch(err){
		return res.status(400).json({
			success: false, 
			message: err.message
		})
	}

})


module.exports = router
