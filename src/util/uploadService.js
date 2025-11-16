const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const imageFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Tipe file tidak valid! Hanya JPEG atau PNG.'), false)
  }
}

const upload = multer({ storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: imageFilter
})


module.exports = upload