import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: '145.223.17.241',
    user: 'u556749424_gaming_easyspl',
    password: 'mS$p7gLa?Mn1',
    database: 'u556749424_gaming_easyspl',
});


console.log('Connected to the database!');

// try {
//     await db.query(`INSERT INTO m01_user (m01_user_id, m01_name) VALUES (?, ?)`, [1, 'test']);
//     await db.query(`INSERT INTO m01_user (m01_user_id, m01_name) VALUES (1, "test")`);
// } catch (e) {
//     console.log(e);
// }

let [rec] = await db.query('SELECT * FROM m01_user');
// let rec = (await db.execute('SELECT * FROM m01_user'))[0];

// await db.execute(`INSERT INTO m01_user (m01_user_id, m01_name) VALUES (?, ?)`, [1, 'test']);
// await db.execute(`INSERT INTO m01_user (m01_user_id, m01_name) VALUES (1, "test")`);

console.log(rec);