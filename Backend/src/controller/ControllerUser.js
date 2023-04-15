
import pool from "../configs/connectDB.js";

 
let UserLogin = async (req, res) => {

    console.log(req.body.userName, ' ', req.body.password); 
    const [rows] = await pool.execute(`SELECT * from users where user_name = ? and password = ?;`, [req.body.userName, req.body.password]);
    return res.status(200).json({
        message: 'Logged in successfully',
        data: rows
    })
}


module.exports = {
    UserLogin
}