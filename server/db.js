const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "khtzgphscsoraa",
//     password: "ica416dd2485e749d25e0a7a9fc8800adc191a2f7b6ea4ed112f8e396f3bf78fa",
//     host: "ec2-34-233-157-189.compute-1.amazonaws.com",
//     port: 5432,
//     database: "d5iqtvr1vrq25p",
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

const pool = new Pool({
    connectionString: "postgres://khtzgphscsoraa:ca416dd2485e749d25e0a7a9fc8800adc191a2f7b6ea4ed112f8e396f3bf78fa@ec2-34-233-157-189.compute-1.amazonaws.com:5432/d5iqtvr1vrq25p",
    ssl: {
        rejectUnauthorized: false,
    }
})
module.exports = pool;