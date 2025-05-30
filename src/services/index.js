const {PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const mysql = require("mysql2/promise");

async function executarSQL(comandoSql) {
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        port: "3308",
        database: "digital_store_db"
    });

    const [result] = await conexao.query(comandoSql);
    conexao.end();

    return result;
}

module.exports = { executarSQL, prisma };





