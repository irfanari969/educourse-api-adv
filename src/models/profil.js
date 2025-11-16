const pool = require('../config/db.js');

class profil { 

  static async updateProfilePicture(userId, fileName) {
    
    const sql = "UPDATE profil SET foto_profil = ? WHERE id_user = ?";
    
    const params = [fileName, userId]
    
    const [result] = await pool.query(sql, params)
    
    return result
  }

    static async create(newProfileData) {
        const id_user = newProfileData.id_user
        const nama = newProfileData.nama

        const sql = "INSERT INTO profil (id_user, nama) VALUES (?, ?)"

        const [result] = await pool.query(sql, [id_user,nama])

    return result
    }

}

module.exports = profil