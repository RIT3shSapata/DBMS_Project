\c apna_ghar

-- Creating the different users
create user admin with password 'password1' nocreatedb;
create user resident with password 'password2' nocreatedb;
create user dependent with password 'password3' nocreatedb;
create user security with password 'password4' nocreatedb;
create user employee with password 'password5' nocreatedb;

-- Granting Admin all the privileges 
grant select,insert,update on resident to admin;
grant select,insert,update on security to admin;
grant select,insert,update on services to admin;
grant select,insert,update on employee to admin;
grant select,insert,update on flat to admin;
grant select,insert,update on parking_slot to admin;
grant select,insert,update on dependent to admin;
grant select,insert,update on visitor to admin;
grant select,insert,update on complaints to admin;
grant select,insert,update on flat_has_security to admin;
grant select,insert,update on resident_residesin_flat to admin;
grant select,insert,update on resident_avails_services to admin;

-- Granting required permissions for resident
grant select on resident to resident;
grant select on dependent to resident;
grant select on visitor to resident;
grant update on resident_update to resident;
grant select on security_display to resident;
grant select on services to resident;
grant select on employee_display to resident;
grant select on flat to resident;
grant select on parking_slot_display to resident;
grant update on parking_slot_update to resident;
grant select on dependent_display to resident;
grant select on visitor_display to resident;
grant select on complaint_display to resident;
grant insert on complaint_insert to resident;
grant select on resident_residesin_flat to resident;
grant select on flat_has_security to resident;
grant select,update,insert on resident_avails_services to resident;

-- Granting required permissions for dependent
grant select on resident_display to dependent;
grant select on security_display to dependent;
grant select on services to dependent;
grant select on employee_display to dependent;
grant select on parking_slot_display to dependent;
grant select on dependent_display to dependent;
grant update on dependent_update to dependent;
grant insert on complaint_insert to dependent;

-- Granting required permissions for security
grant select on resident_display to security; 
grant select on security_display to security; 
grant update on security_update to security; 
grant select on employee_display to security; 
grant select on flat_display to security;
grant select on parking_slot_display to security;
grant select on dependent_display to security;
grant select on visitor_display to security;
grant insert on visitor_insert to security;
grant select,update on visitor_update to security;
grant select on resident_residesin_flat to security;

-- Granting required permissions for employee
grant select on resident_display to employee; 
grant select on employee_display to employee; 
grant update on employee_update to employee; 
grant select on flat_display to employee;
grant select on complaint_display to employee;
grant select on resident_avails_services to employee;
grant select on resident_residesin_flat to employee;