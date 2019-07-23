
select full_name from actors where full_name like "%dan%";
-- How many male actors are there whose name start with ben?
 select full_name, count(*) from actors where full_name like "ben%";
-- What are the 5 lowest salaries actors have gotten for movies?
select salary from cast order by salary limit 5;

