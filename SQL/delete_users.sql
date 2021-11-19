\c apna_ghar

-- Revoking Admin permissions
revoke select,insert,update on resident from admin;
revoke select,insert,update on security from admin;
revoke select,insert,update on services from admin;
revoke select,insert,update on employee from admin;
revoke select,insert,update on flat from admin;
revoke select,insert,update on parking_slot from admin;
revoke select,insert,update on dependent from admin;
revoke select,insert,update on visitor from admin;
revoke select,insert,update on complaints from admin;
revoke select,insert,update on flat_has_security from admin;
revoke select,insert,update on resident_residesin_flat from admin;
revoke select,insert,update on resident_avails_services from admin;

-- Revoking resident permissions
revoke select on resident from resident;
revoke update on resident_update from resident;
revoke select on security_display from resident;
revoke select on services from  resident;
revoke select on employee_display from resident;
revoke select on flat from  resident;
revoke select on parking_slot_display from resident;
revoke update on parking_slot_update from resident;
revoke select on dependent_display from  resident;
revoke select on visitor_display from resident;
revoke select on complaint_display from resident;
revoke insert on complaint_insert from resident;
revoke select on resident_residesin_flat from resident;
revoke select on flat_has_security from resident;
revoke select,update on resident_avails_services from resident

-- Revoking resident dependent
revoke select on resident_display from dependent;
revoke select on security_display from dependent;
revoke select on services from dependent;
revoke select on employee_display from dependent;
revoke select on parking_slot_display from dependent;
revoke select on dependent_display from dependent;
revoke update on dependent_update from dependent;
revoke insert on complaint_insert from dependent;

-- Revoking resident security
revoke select on resident_display from security; 
revoke select on security_display from security; 
revoke update on security_update from security; 
revoke select on employee_display from security; 
revoke select on flat_display from security;
revoke select on parking_slot_display from security;
revoke select on dependent_display from security;
revoke select on visitor_display from security;
revoke insert on visitor_insert from security;
revoke update on visitor_update from security;

-- Revoking resident employee
revoke select on resident_display from employee; 
revoke select on employee_display from employee; 
revoke update on employee_update from employee; 
revoke select on flat_display from employee;
revoke select on complaint_display from employee;
revoke select on resident_avails_services from employee;
revoke select on resident_residesin_flat from employee;

-- Dropping users if they exist
drop user admin;
drop user resident;
drop user security;
drop user employee;
drop user dependent;
