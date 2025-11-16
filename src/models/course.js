const pool = require('../config/db.js')

class Course {
  static async findAll(queryParams) {
   
    const { search, filter, sort, limit, offset } = queryParams

  let sql = `
    SELECT 
      course.id_course, course.nama_course, 
      tutor.nama_tutor, kategori.nama_kategori, course.harga
    FROM 
      course
    JOIN 
      tutor ON course.id_tutor = tutor.id_tutor
    JOIN 
      kategori ON course.id_kategori = kategori.id_kategori
    WHERE 1=1
  `
  let params = []

  if (search) {
    sql += " AND course.nama_course LIKE ?"
    params.push(`%${search}%`)
  }
  if (filter) {
    sql += " AND kategori.nama_kategori = ?"
    params.push(filter)
  }
  if (sort) {
    let sortColumn = 'course.harga'
    if (sort === 'nama') {
      sortColumn = 'course.nama_course'
    }
    sql += ` ORDER BY ${sortColumn} ASC`
  }

  sql += " LIMIT ? OFFSET ?"
  params.push(limit)
  params.push(offset)

  const [rows] = await pool.query(sql, params)
  return rows
}
  static async findById(id) {

    const sql = `
    SELECT 
        course.nama_course, 
        course.deskripsi, 
        course.harga,
        tutor.nama_tutor, 
        kategori.nama_kategori
    FROM 
        course
    JOIN 
        tutor ON course.id_tutor = tutor.id_tutor
    JOIN 
        kategori ON course.id_kategori = kategori.id_kategori
    WHERE 
        course.id_course = ?
`
const [rows] = await pool.query(sql, [id])
return rows[0]
  }

static async create(newCourseData) {
  const { nama_course, deskripsi, harga, id_tutor, id_kategori } = newCourseData

  const sql = "INSERT INTO course (nama_course, deskripsi, harga, id_tutor, id_kategori) VALUES (?, ?, ?, ?, ?)"

  const [result] = await pool.query(sql, [nama_course, deskripsi, harga, id_tutor, id_kategori])
  return result
}

static async updateById(id_course, courseData) {
  const { nama_course, deskripsi, harga } = courseData

  const sql = "UPDATE course SET nama_course = ?, deskripsi = ?, harga = ? WHERE id_course = ?"

  const [result] = await pool.query(sql, [nama_course, deskripsi, harga, id_course])
  return result
}

static async deleteById(id_course){
  const sql = "DELETE FROM course WHERE id_course = ?"
  
  const [result] = await pool.query(sql, [id_course])
  return result
}
}

module.exports = Course