SELECT day, count(assignments) as num_of_assignments, sum(duration) as duration
  FROM assignments
  GROUP BY day
  ORDER BY day;