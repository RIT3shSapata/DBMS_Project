\c apna_ghar
--select all info on employees whose shift is Day
select * from employee where shift='Day';
--select firstname,lastname and pet info of residents who have a pet
select fname,lname,pet_info from resident where pet_info!='no pet';
-- select resident flatid,fname,lname who live in a flat with more than 2 BHKS
select re.flatid,fname,lname from flat as f,resident as r,resident_residesin_flat as re where (f.flatid=re.FlatID and r.aadhar=re.residentuid and no_bhk>2);
-- select resident flatid,fname,lname who OWN flat
select Fname,Lname,f.FlatID from resident as r,flat as f, resident_residesin_flat as re where r.Aadhar=re.residentUID and re.FlatID=f.FlatID and rent_owned='Own';
--display resident's firstname,last name and number of complaints made so far
select r.Fname,r.Lname,(select count(*) from complaints where ResidentUID=r.Aadhar) as no_of_complaints from resident as r;
-- select securityID and their name who guard Flat's in A block and are on night shift
select securityID,Fname,Lname from security where shift='Night' INTERSECT select s.securityID,Fname,Lname from security as s, flat_has_security as fas WHERE fas.securityID = s.securityID and fas.FlatID SIMILAR TO 'A%';
-- select services which cost less than 500 or are provided in the night
select serviceID from services where cost<500 UNION select serviceID from employee where shift='night';
--display firstname,lastname,shift,gender,type of service  and cost of the service given by an employee
select Fname,Lname,shift,gender,type,cost from employee as e INNER JOIN services as s ON e.serviceID = s.serviceID;
--display residents name and the number of dependents whose age is more 60
select Fname,Lname,(select count(*) from depenedent where residentUID=r.Aadhar and (EXTRACT(year FROM age(now(),DOB)) :: int)>60) from resident as r where (select count(*) from depenedent where residentUID=r.Aadhar and (EXTRACT(year FROM age(now(),DOB)) :: int)>60)>0 ;
--display name and the service availed by the resident
select Fname,Lname,rrf.FlatID,type as service_availed from resident_avails_services as ras,resident as r,services as s,flat as f,resident_residesin_flat as rrf WHERE rrf.FlatID=f.FlatID AND rrf.ResidentUID=r.Aadhar AND ras.ResidentUID=r.Aadhar AND ras.serviceID=s.serviceID;