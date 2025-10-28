const express = require('express')
const router = express.Router()

const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById
} = require('../controllers/course.controller.js')

router.get('/', getAllCourses)

router.get('/:id', getCourseById)

router.post('/', createCourse)

router.patch('/:id', updateCourseById)

router.delete('/:id', deleteCourseById)


module.exports = router