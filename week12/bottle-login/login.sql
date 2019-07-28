use store;
create table users (
 id  int not null auto_increment primary key,
 nickname varchar(50) not null,
 session_id varchar(50),
 password  varchar(8) not null
 );
