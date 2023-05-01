SELECT name, email, phone
  FROM students
    WHERE end_date IS NULL
    AND github IS NOT NULL;