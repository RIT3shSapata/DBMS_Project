-- Creating the different users
create user admin with password 'password1' apna_ghar;
create resident admin with password 'password2' apna_ghar;
create security admin with password 'password3' apna_ghar;

-- Read permissions to different users
grant select on 
resident, security, services, employee, flat, parking_slot, dependent, visitor, complaints, resident_residesin_flat, flat_has_security, resident_avails_services
to admin;

grant select on 
resident, services, dependent, visitor, complaints, flat_has_security, security, resident_avails_services,
to resident;

grant select on 
flat_has_security,resident_residesin_flat, visitor, dependent, parking_slot, flat, resident
to security;

-- Write permissions to different users
grant insert on 
resident, security, services, employee, flat, parking_slot, dependent, visitor, complaints, resident_residesin_flat, flat_has_security, resident_avails_services
to admin;

grant insert on 
resident, services, complaints, resident_avails_services,
to resident;

grant insert on 
visitor
to security;
