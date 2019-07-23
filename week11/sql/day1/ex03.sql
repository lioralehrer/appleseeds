
 select dept_name from departments;
select * from employees where gender="f" and first_name="elvis" ;
select * from employees where last_name="Merlo" or "Smith" or "Albin"
or "Unno" or "Baba" or"Luft" or "Ozeri"or "Dalton" or "Peck";
select * from employees where year(hire_date) in (1995,1996) order by hire_date  ;
select * from employees where first_name like "a%" and last_name like"%z";
select *from salaries order by salary desc limit 5;
select * from employees where hire_date > (select hire_date  from employees where first_name="jagoda"  and last_name="nannarelli");




 