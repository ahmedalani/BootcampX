const { Pool } = require('pg');

const pool = new Pool({
  user: '3lehamacbook',
  password: '123',
  host: 'localhost',
  database: 'BootcampX'
});

const args = process.argv.slice(2);

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort 
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '${args[0]}'
  ORDER BY teacher
;
`)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  });