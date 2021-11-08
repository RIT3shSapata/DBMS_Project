\c apna_ghar

-- Creating Views for Resident
create view resident_display 
as select fname,lname,phone,gender 
from resident;

create view resident_update 
as select fname,lname,phone,pet_info 
from resident;


-- Creating Views for Security
create view security_display 
as select fname,lname,phone,shift 
from security;

create view security_update 
as select fname,lname,phone 
from security;


-- Creating Views for Employee
create view employee_display 
as select fname,lname,phone,gender,shift 
from employee;

create view employee_update 
as select fname,lname,phone 
from employee;


-- Creating Views for Flat
create view flat_display 
as select * 
from flat;


-- Creating Views for parking slot 
create view parking_slot_display 
as select * 
from parking_slot;

create view parking_slot_update 
as select vehicle_type 
from parking_slot;


-- Creating Views for dependent
create view dependent_display 
as select fname,lname,phone,gender,dob,Aadhar
from dependent;

create view dependent_update 
as select fname,lname,phone 
from dependent;


-- Creating Views for visitor
create view visitor_display 
as select * 
from visitor;

create view visitor_insert 
as select visitorID,ResidentUID,fname,lname,purpose,phonenumber,time_of_entry 
from visitor;

create view visitor_update 
as select time_of_exit 
from visitor;


-- Creating Views for complaint 
create view complaint_display 
as select residentUID,Complain,date 
from complaints;

create view complaint_insert 
as select complaintID,ResidentUID,Complain,date 
from complaints;

