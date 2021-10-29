\c apna_ghar
select * from employee where shift='Day';
select fname,lname,pet_info from resident where pet_info!='no pet';
select re.flatid,fname,lname from flat as f,resident as r,resident_residesin_flat as re where (f.flatid=re.FlatID and r.aadhar=re.residentuid and no_bhk>2);
select Fname,Lname,f.FlatID from resident as r,flat as f, resident_residesin_flat as re where r.Aadhar=re.residentUID and re.FlatID=f.FlatID and f.no_bhk=2;
select Fname,Lname from resident as r,resident_residesin_flat as re where r.Aadhar=re.residentUID and re.rent_owned='Rent';