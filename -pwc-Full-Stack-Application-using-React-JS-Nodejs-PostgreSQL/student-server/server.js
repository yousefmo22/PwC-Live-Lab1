const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require('fs');
const path = require('path');

function readSecret(name, defaultValue = null) {
    const secretPath = path.join('/run/secrets', name);

    try {
        if (fs.existsSync(secretPath)) {
            return fs.readFileSync(secretPath, 'utf8').trim();
        }
    } catch (err) {
        console.error(`[SECRET ERROR] ${name}:`, err.message);
    }

    return process.env[name.toUpperCase()] || defaultValue;
}

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    password: 'data@data',
    database: 'student_master',
    host: 'localhost',
    port: 5432,
    max: 10
});

pool.connect((err) => {
    if (err) throw err;
    console.log('Connected to PostgreSQL database');
});

// Start server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
});

// GET all students
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM student';
    pool.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result.rows);
    });
});

// GET one student by ID
app.get('/students/:studentid', (req, res) => {
    const stdId = Number(req.params.studentid);
    const sql = 'SELECT * FROM student WHERE studentid = $1';
    pool.query(sql, [stdId], (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result.rows);
    });
});

// POST create student
app.post('/students', (req, res) => {
    const { name, major, email } = req.body;
    const sql = 'INSERT INTO student(name, major, email) VALUES($1, $2, $3) RETURNING *';
    pool.query(sql, [name, major, email], (err, result) => {
        if (err) return res.json(err);
        return res.status(201).json(result.rows[0]);
    });
});

// PATCH update student
app.patch('/students/:studentid', (req, res) => {
    const stdId = Number(req.params.studentid);
    const { name, major, email } = req.body;
    const sql = 'UPDATE student SET name = $1, major = $2, email = $3 WHERE studentid = $4';
    pool.query(sql, [name, major, email, stdId], (err, result) => {
        if (err) return res.json(err);
        return res.status(200).send(`Student updated successfully: ${stdId}`);
    });
});

// DELETE student
app.delete('/students/:studentid', (req, res) => {
    const stdId = Number(req.params.studentid);
    const sql = 'DELETE FROM student WHERE studentid = $1';
    pool.query(sql, [stdId], (err, result) => {
        if (err) return res.json(err);
        return res.status(200).send(`Student deleted successfully: ${stdId}`);
    });
});
 