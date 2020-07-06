const mysql = require('../config/connection');

exports.selectAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM mywords`);
    return data;
}
