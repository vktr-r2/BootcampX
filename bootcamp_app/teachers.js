const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database:'bootcampx'
});

const cohort = process.argv[2]
const values = [`%${cohort}%`]
const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name LIKE $1
    ORDER BY teacher;
    `

pool.query(queryString, values)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));