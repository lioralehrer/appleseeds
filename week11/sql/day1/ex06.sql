select year(hire_date) ,count(*) from employees group by(year(hire_date));
-- What is the number of employees hired each month per each year?
select date(hire_date),count(*) from employees group by (date(hire_date));
 select  DATE_FORMAT(hire_date,'%Y-%m'),count(*)from employees GROUP BY DATE_FORMAT(hire_date,'%Y-%m') order by hire_date;
-- How many employees were in each department per year?
 select * from dept_emp group by from_date order by from_date ;
-- What is the average salary each employee had in their time working for the company?
 select  AVG(salary) AS AverageSalary  from salaries;
-- How many different titles are there in the company?
 select count(distinct title) from titles; 
-- How many people hold every different title?
 select title,count(*) from titles group by title order by count(*);
-- How much money did every employee make in the company?
 select emp_no ,sum(salary)from salaries group by(emp_no);
-- What is the maximum amount of departments a single employee worked at?
  select  count(dept_no) from dept_emp group by (emp_no) order by count(dept_no) desc limit 1;
 -- How many male/female employees were there in the company?
 select gender, count(gender) from employees  group by gender;
-- Who are the 10 youngest employees in the company?
select first_name,last_name, birth_date  from employees order by birth_date desc limit 10;



