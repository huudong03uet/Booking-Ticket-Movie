import pool from '../configs/connectDB.js'

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('Select * from bookingticketmovie.tbl_registration'); 
    return res.status(200).json({
        message: "Get all users",
        data: rows
    });
}

let createNewUser = async (req, res) => {
    let { name, email, phone, age, gender } = req.body;
    if(!name || !email || !phone || !age || !gender) {
        return res.status(400).json({
            message: "Missing data"
        });
    }
    await pool.execute(
      "INSERT INTO bookingticketmovie.tbl_registration(name, email, phone, age, gender) values (?, ?, ?, ?, ?)",
      [name, email, phone, age, gender]
    );
    return res.status(200).json({
        message: "Create new user",
        data: req.body

    });
}

let updateUser = async (req, res) => {
    
    let {user_id, name, email, phone, age} = req.body;
    if(!user_id || !name || !email || !phone || !age) {
        return res.status(400).json({
            message: "Missing data"
        });
    }
    
    await pool.execute('UPDATE bookingticketmovie.tbl_registration SET name = ?, email = ?, phone = ?, age = ? WHERE user_id = ?', [name, email, phone, age, user_id]);
    return res.status(200).json({
        message: "Update user",
        data: req.body
    });
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if(!userId) {
        return res.status(400).json({
            message: "Missing data"
        });
    }
    await pool.execute(
        "DELETE FROM bookingticketmovie.tbl_registration WHERE user_id = ?",
        [userId]
    );
    return res.status(200).json({
        message: "Delete user",
        data: req.body
    });
}
module.exports = {

    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser

}
