// connecting our db to the server
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "muhammed",
    password: "999",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;

