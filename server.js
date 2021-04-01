const express = require('express')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('HR', 'admin', 'h0cm0n21!', {
    host: 'sambusport.cjq2ozg3e8cp.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql',
    logging: (...msg) => console.log(msg),
});



const app = express()
const port = 3000

app.get('/', async (req, res) => {
    await sequelize.authenticate();
    const [results, metadata] = await sequelize.query("SELECT * FROM HR.SALARYS");
    res.json({ results, metadata })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})