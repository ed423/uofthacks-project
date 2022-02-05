const Pool = require("pg").Pool;

const pool = new Pool({
    user: "martincai",
    password: "idiot",
    host: "localhost",
    port: 5432,
    database: "ratemyconcert"
});

module.exports = pool;