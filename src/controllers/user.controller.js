const user = require('../models/user.js')
const profil = require('../models/profil.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendEmail = require('../util/emailService.js')

const registerUser = async (req, res) => {
  try {

    const { full_name, username, email, password } = req.body

    const existingUser = await user.findByEmail(email)


    if (existingUser) {
      return res.status(400).json({ message: "Email sudah terdaftar." })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newData = {
      full_name: full_name,
      username: username,
      email: email,
      password: hashedPassword
    }
    const newUserId = await user.create(newData)

    const profileData = { id_user: newUserId, nama: full_name }

    await profil.create(profileData)

const emailOptions = {
  to: email,
  subject: 'Selamat Datang di EduCourse!',
  text: `Halo ${full_name}, pendaftaran Anda berhasil.`,
  html: `<b>Halo ${full_name},</b><p>Pendaftaran Anda di EduCourse telah berhasil!</p>`
}

   await sendEmail(emailOptions);

    return res.status(201).json({ message: "Registrasi berhasil!" })

  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Terjadi kesalahan di server" })
  }
}

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body

    const dataUser = await user.findByEmail(email)

    if (!dataUser) {
      return res.status(400).json({ message: "Email atau password yang Anda masukkan salah." })
    }

    const isPasswordMatch = await bcrypt.compare(password, dataUser.password)

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Email atau password yang Anda masukkan salah." })
    }

    const payload = {
      id: dataUser.id_user, 
      email: dataUser.email
    }

    const token = jwt.sign(
        payload, 
        process.env.JWT_SECRET,
        { expiresIn: '1h' } 
    )

    return res.status(200).json({
      message: "Login berhasil!",
      token: token
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan di server" })
  }
}

module.exports = {
  registerUser,
  loginUser
}

