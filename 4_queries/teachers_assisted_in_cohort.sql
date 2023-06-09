SELECT DISTINCT teachers.name
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = assistance_requests.student_id
  JOIN cohorts ON cohorts.id = students.cohort_id
    WHERE cohorts.name = 'JUL02'
      ORDER BY teachers.name;