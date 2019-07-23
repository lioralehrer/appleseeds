-- full name of actors order by abc 
-- select full_name from actors order by full_name asc ;
-- How many movies are there?-- 
 -- select count(*) from movies;
-- How many action movies are there?
 select  count(*) from movies where genre="action";
-- How many non-action movies are there?
  select  count(*) from movies where genre !="action" ;
 -- How many movies came out in each year?
  select  year, count(*) from movies  group by year order by year;
 -- How many movie titles have the word “the” in them?
  select count(*) from movies where title like "%the%";
--  How many movie titles start with the word “the”?
select count(*) from movies where title like "the%";
