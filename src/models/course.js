const pool = require('../config/db.js')

class Course {
  static async findAll() {
   
    const sql = "SELECT * FROM course"
    
    const [rows] = await pool.query(sql)
    return rows
  }

  static async findById(id) {

    const sql = "SELECT * FROM course WHERE id = ?"

    const [rows] = await pool.query(sql, [id])
    return rows[0]
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


module.exports = Course;