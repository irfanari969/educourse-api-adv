const express = require('express')
const upload = require('../util/uploadService.js')
const router = express.Router()
const { verifyToken } = require('../middleware/auth.js')

const {
  updateProfilePicture
} = require('../controllers/profil.controller.js')

router.patch(
  '/profile-picture', 
  verifyToken,         
  upload.single('photo'), 
  updateProfilePicture 
)


module.exports = router