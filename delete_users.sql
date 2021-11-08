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

-- Revoking security permissions
revoke select on flat_has_security from security;
revoke select on resident_residesin_flat from security;
revoke select,insert on visitor from security;
revoke select on dependent from security;
revoke select on parking_slot from security;
revoke select on flat from security;
revoke select on resident from security;

-- Dropping users if they exist
drop user admin;
drop user resident;
drop user security;
