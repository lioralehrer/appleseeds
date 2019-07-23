use employees;
 -- who are the first ten employees (who ever held this title) whose title is or was Assistant Engineer?
select emp.first_name, emp.last_name from employees as emp
inner join titles as t on emp.emp_no = t.emp_no
and t.title = "assistant engineer";
-- Who are the second ten employees (11-20, who ever held this title) whose title is or was Senior Engineer?
select emp.first_name, emp.last_name 
from employees as emp
inner join titles as t 
on emp.emp_no = t.emp_no
and t.title = "Senior Engineer"
limit 10,10;
--  What are the departments who have the largest amount of engineers (of any kind)?
select d.dept_name from titles as t 
inner join dept_emp as de 
on de.emp_no = t.emp_no
inner join departments as d
on d.dept_no = de.dept_no
where t.title like  "%engineer%" 
 group by  de.dept_no
 order by count(t.emp_no) desc limit 3;



 




