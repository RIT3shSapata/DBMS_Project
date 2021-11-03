-- Dropping users if they exist
drop user admin;
drop user resident;
drop user security;

-- Creating the different users
create user admin with password 'password1' nocreatedb;
create user resident with password 'password2' nocreatedb;
create user security with password 'password3' nocreatedb;

-- Select, Insert and Update permissions to admin
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

-- Select, Insert and Update permissions to resident
grant select,update on resident to resident;
grant select on services to resident;
grant select,update on dependent to resident;
grant select on visitor to resident;
grant select,insert on complaints to resident;
grant select on flat_has_security to resident;
grant select on security to resident;
grant select,insert on resident_avails_services to resident;

-- Select and Insert permissions to security
grant select on flat_has_security to security;
grant select on resident_residesin_flat to security;
grant select,insert on visitor to security;
grant select on dependent to security;
grant select on parking_slot to security;
grant select on flat to security;
grant select on resident to security;

