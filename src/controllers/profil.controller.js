
const profil = require('../models/profil.js')

const updateProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Tidak ada file yang diunggah.')
    }

    const userId = req.user.id
    const fileName = req.file.filename
    
    await profil.updateProfilePicture(userId, fileName)

    res.status(200).json({
      message: 'Upload foto profil berhasil',
      fileName: fileName
    });

  } catch (error) {
    console.error("Error saat update foto profil:", error)
    res.status(500).json({ message: 'Terjadi kesalahan di server' })
  }
}

module.exports = {
  updateProfilePicture
}