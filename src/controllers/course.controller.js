const Course = require('../models/course.js')

const getAllCourses = async (req, res) => {
  console.log(req.query)
  const { page = 1, limit = 10 } = req.query
  const offset = (page - 1) * limit

  try {
    const courses = await Course.findAll({
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10)
    });

    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan di server", error: error.message })
  }
}

const getCourseById = async (req, res) => {
    const id = req.params.id
    try {
        const courses = await Course.findById(id)

        res.status(200).json(courses)

    } catch (error) {

        res.status(500).json({ message: "Terjadi kesalahan di server", error: error.message })
  }
}

const createCourse = async (req, res) => {
      const create = req.body
      try {
        const courses = await Course.create(create)

        res.status(201).json(courses)

      } catch (error) {

        res.status(500).json({ message: "Terjadi kesalahan di server", error: error.message })
      }    
}

const updateCourseById = async (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    try {
        const courses = await Course.updateById(id, updatedData)

        res.status(200).json(courses)

    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan di server", error: error.message })
    }
}

const deleteCourseById = async (req, res) => {
    const id = req.params.id
    try {
        const courses = await Course.deleteById(id)

        res.status(200).json(courses)

    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan di server", error: error.message })
    }
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById
}