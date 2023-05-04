const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database:'bootcampx'
});

const cohortName = process.argv[2];
const resultLimit = process.argv[3];

pool.query(`
SELECT students.id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '${cohortName}%'
LIMIT ${resultLimit};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));