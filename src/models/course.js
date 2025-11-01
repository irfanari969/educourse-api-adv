const pool = require('../config/db.js')

class Course {
  static async findAll() {
   
    const sql = `
    SELECT 
        course.id_course,
        course.nama_course, 
        tutor.nama_tutor, 
        kategori.nama_kategori,
        course.harga
    FROM 
        course
    JOIN 
        tutor ON course.id_tutor = tutor.id_tutor
    JOIN 
        kategori ON course.id_kategori = kategori.id_kategori
`
const [rows] = await pool.query(sql);
return rows;
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
const [rows] = await pool.query(sql, [id]);
return rows[0];
  }

  static async create(newCourseData) {
    const id = newCourseData.id
    const name = newCourseData.name
    const description = newCourseData.description

    const sql = "INSERT INTO course (id, name, description) VALUES (?, ?, ?)"

    const [result] = await pool.query(sql, [id,name,description])

    return result
}

static async updateById(id, courseData) {

  const sql = "UPDATE course SET name = ?, description = ? WHERE id = ?"

  const [result] = await pool.query(sql, [courseData.name, courseData.description, id])

  return result
}

static async deleteById(id){

  const sql = "DELETE FROM course WHERE id = ?"
  
   const [result] = await pool.query(sql, [id])
   
   return result
  }

}


module.exports = Course