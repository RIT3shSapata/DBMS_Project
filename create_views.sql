-- Creating Views for Resident
create view resident_display 
as select * 
from resident;

create view resident_update 
as update fname,lname,phone,pet_info 
from resident;


-- Creating Views for Security
create view security_display 
as select * 
from security;

create view security_update 
as update fname,lname,phone 
from security;


-- Creating Views for Services
create view services_display 
as select * 
from services;


-- Creating Views for Employee
create view employee_display 
as select * 
from employee;

create view employee_update 
as update fname,lname,phone 
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
as update vehicle_type 
from parking_slot;


-- Creating Views for dependent
create view dependent_display 
as select * 
from dependent;

create view dependent_update 
as update fname,lname,phone 
from dependent;


-- Creating Views for visitor
create view visitor_display 
as select * 
from visitor;

create view visitor_insert 
as insert visitorID,ResidentUID,fname,lname,purpose,phonenumber,time_of_entry 
from visitor;

create view visitor_update 
as update time_of_exit 
from visitor;


-- Creating Views for complaint 
create view complaint_display 
as select * 
from complaint;

create view complaint_insert 
as insert complaintID,ResidentUID,Complain,date 
from complaint;


-- Creating Views for resident_residesin_flat 
create view resident_residesin_flat_display 
as select * 
from resident_residesin_flat;

create view resident_residesin_flat_insert 
as insert ResidentUID,FlatID,rent_owned 
from resident_residesin_flat;

create view resident_residesin_flat_update 
as update rent_owned 
from resident_residesin_flat;


-- Creating Views for flat_has_security 
create view flat_has_security_display 
as select * 
from flat_has_security;

create view flat_has_security_insert 
as insert FlatID,securityID 
from flat_has_security;

create view flat_has_security_update 
as update FlatID 
from flat_has_security;


-- Creating Views for resident_avails_services
create view resident_avails_services_display 
as select * 
from resident_avails_services;

create view resident_avails_services_insert 
as insert ResidentUID,serviceID 
from resident_avails_services;