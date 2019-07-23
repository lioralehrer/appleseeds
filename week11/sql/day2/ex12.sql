
use employees;
   --   select * from employees;
-- How many male employees and how many female employees have worked in the company (single query)?
 select gender,count(*) from employees group by gender;
-- How many different titles are there in the company?
   select  count(distinct title) from titles;
-- What are the names and titles of the employees who got hired in 1993?
 select first_name, last_name  from employees where hire_date >= "1993-01-01" and hire_date <= "1993-12-31";
--  Who are the ten employees whose title is or was Staff and have the lowest salary?
select emp.first_name,t.title, s.salary from employees as emp
inner join titles as t on emp.emp_no = t.emp_no
inner join salaries as s on s.emp_no = emp.emp_no
where t.title like "staff"  order by s.salary limit 10;
-- What is the average salary per title? Order the results from highest to lowest?
 select distinct t.title ,avg(s.salary)from titles as t 
inner join salaries as s on t.emp_no = s.emp_no
group by t.title order by s.salary desc
 