\c apna_ghar

create table auth
(
	username varchar(12) not null,
	password varchar(20) not null,
	type varchar(10) not null,
	Primary key (username)
);

insert into auth values('admin','password1','admin');