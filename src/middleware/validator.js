const Joi = require('joi')

const registerSchema = Joi.object({
  full_name: Joi.string().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
    .required()
    .messages({
      'string.pattern.base': 'Password harus mengandung huruf besar, huruf kecil, angka, dan karakter spesial',
      'string.min': 'Password harus memiliki minimal 8 karakter'
    })
})

const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      message: 'Validasi data gagal',
      error: error.details[0].message 
    })
  }
  next()
}

module.exports = {
  validateRegister
}