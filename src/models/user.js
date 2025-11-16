const pool = require('../config/db.js')

class user {
    static async create(data) {
        const full_name = data.full_name
        const username = data.username
        const email = data.email
        const password = data.password

        const sql = "INSERT INTO user (full_name, username, email, password) VALUES (?, ?, ?, ?)"

        const [result] = await pool.query(sql, [full_name,username,email,password])

    return result.insertId
    }

    static async findByEmail(email) {

        const sql = `
    SELECT 
        user.id_user, 
        user.username, 
        user.password,
        user.full_name, 
        user.email
    FROM 
        user
    WHERE 
        user.email = ?
`
const [rows] = await pool.query(sql, [email])
return rows[0]   
    }
}

module.exports = user