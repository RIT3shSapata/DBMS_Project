-- Creating a new database
drop database apna_ghar;
create database apna_ghar;

\c apna_ghar

-- Creating resident table 
create table resident
(
	Aadhar varchar(12) not null,
	Fname varchar(15) not null,
	Lname varchar(15),
	DOB date not null,
	phone varchar(10) not null,
	gender varchar(2) not null,
	pet_info varchar(20) default 'no pet',
	primary key (Aadhar));

-- Creating security table 
create table security
(
	securityID varchar(10) not null,
	Fname varchar(15) not null,
	Lname varchar(15),
	phone varchar(10) not null,
	doj date not null,
	shift varchar(5) default 'day',
	primary key (securityID)
);

-- Creating services table 
create table services
(
	serviceID varchar(10) not null,
	cost real,
	type varchar(20),
	primary key (serviceID)
);

-- Creating employee table 
create table employee
(
	employeeID varchar(10) not null,
	Fname varchar(15) not null,
	Lname varchar(15),
	phone varchar(10) not null,
	doj date not null,
	gender varchar(2) not null,
	shift varchar(5) default 'day',
	serviceID varchar(10) not null,
	salary real not null check(salary>15000),
	primary key (employeeID),
	foreign key (serviceID) references services(serviceID)
);

-- Creating flat table 
create table flat
(
	FlatID varchar(10) primary key not null,
	no_bhk int not null
);

-- Creating parking_slot table 
create table parking_slot
(
	slotNo integer not null,
	vehicle_type varchar(10),
	flatID varchar(10) not null,
	primary key (slotNo),
	foreign key (flatID) references flat(flatID)
);

-- Creating dependent table 
create table dependent
(
	Aadhar varchar(12) not null,
	residentUID varchar(12) not null,
	Fname varchar(15) not null,
	Lname varchar(15),
	DOB date not null,
	phone varchar(10) not null,
	gender varchar(2) not null,
	primary key (Aadhar),
	foreign key(residentUID) references resident(Aadhar)
);

-- Creating visitor table 
create table visitor
(
	visitorID varchar(10) not null,
	flatID varchar(10) not null,
	Fname char(15) not null,
	Lname char(15), 
	purpose varchar(100),
	phonenumber varchar(10), 
	time_of_entry timestamp,
	time_of_exit timestamp,
	primary key(visitorID,flatID),
	foreign key(flatID) references flat(FlatID)
);

-- Creating complaints table 
create table complaints
(
	ComplaintID varchar(10) primary key, 
	ResidentUID varchar(14), 
	Complain char(100), 
	date date,time time,
	foreign key(ResidentUID) references resident(Aadhar)
);

-- Creating resident_residesin_flat table 
create table resident_residesin_flat
(
	ResidentUID varchar(14),
	FlatID varchar(10), 
	rent_owned varchar(10), 
	primary key(ResidentUID,FlatID),
	foreign key(ResidentUID) references resident(Aadhar),
	foreign key(FlatID) references flat(FlatID)
	);

-- Creating flat_has_security table 
create table flat_has_security
(
	FlatID varchar(10),
	securityID varchar(10),
	primary key(FlatID,securityID),
	foreign key(FlatID) references flat(FlatID),
	foreign key(securityID) references security(securityID)
	);

-- Creating resident_avails_services table 
create table resident_avails_services
(
	ResidentUID varchar(14),
	serviceID varchar(10), 
	serviceTime timestamp,
	primary key(ResidentUID,serviceID,serviceTime),
	foreign key(ResidentUID) references resident(Aadhar)
	);

create table auth
(
	username varchar(12) not null,
	password varchar(20) not null,
	type varchar(10) not null,
	Primary key (username)
);

insert into auth values('admin','password1','admin');