import pool from '../configs/connectDB.js'

let getNowPlaying = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT title, rate, (SELECT COUNT(*) FROM ticket t INNER JOIN showtime s on t.showtime_id = s.showtime_id WHERE s.film_id = film.film_id) as popularity, genres, release_date, film_id, poster FROM film WHERE now() < dates_minium and now() > dates_maxium;'); 
    return res.status(200).json({
        message: "Get now playing film",
        data: rows
    });
}

// let createNewUser = async (req, res) => {
//     let { name, email, phone, age, gender } = req.body;
//     if(!name || !email || !phone || !age || !gender) {
//         return res.status(400).json({
//             message: "Missing data"
//         });
//     }
//     await pool.execute(
//       "INSERT INTO bookingticketmovie.tbl_registration(name, email, phone, age, gender) values (?, ?, ?, ?, ?)",
//       [name, email, phone, age, gender]
//     );
//     return res.status(200).json({
//         message: "Create new user",
//         data: req.body

//     });
// }

// let updateUser = async (req, res) => {
    
//     let {user_id, name, email, phone, age} = req.body;
//     if(!user_id || !name || !email || !phone || !age) {
//         return res.status(400).json({
//             message: "Missing data"
//         });
//     }
    
//     await pool.execute('UPDATE bookingticketmovie.tbl_registration SET name = ?, email = ?, phone = ?, age = ? WHERE user_id = ?', [name, email, phone, age, user_id]);
//     return res.status(200).json({
//         message: "Update user",
//         data: req.body
//     });
// }

// let deleteUser = async (req, res) => {
//     let userId = req.params.id;
//     if(!userId) {
//         return res.status(400).json({
//             message: "Missing data"
//         });
//     }
//     await pool.execute(
//         "DELETE FROM bookingticketmovie.tbl_registration WHERE user_id = ?",
//         [userId]
//     );
//     return res.status(200).json({
//         message: "Delete user",
//         data: req.body
//     });
// }
module.exports = {

    getNowPlaying,
    // createNewUser,
    // updateUser,
    // deleteUser

}
