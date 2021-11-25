import SignIn from '../components/loginpage';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import New_resident from '../components/admin/forms/resident';
import Security from '../components/admin/forms/security';
import Dependent from '../components/admin/forms/dependent';
import Service from '../components/admin/forms/service';
import Employee from '../components/admin/forms/employee';
import { useState } from 'react';
import ViewResidents from '../components/admin/tables/viewResidentFlat';
import EmployeeList from '../components/admin/tables/EmployeeList';
import ServicesRequested from '../components/admin/tables/ServicesRequested';
import SecurityTable from '../components/admin/tables/SecurityTable';
import ComplaintTable from '../components/admin/tables/ComplaintTable';
function Admin() {
    const [residentform, setResidentform] = useState(false);
    const [dependentinfo, setDependentinfo] = useState(false);
    const [security, setSecurityform] = useState(false);
    const [employee, setEmployeeform] = useState(false);
    const [service, setServiceform] = useState(false);
    const [resideflatinfo, setresideflatinfo] = useState(false);
    const [servicereqtable, setservicereqtable] = useState(false);
    const [employeelist, setemployeelist] = useState(false);
    const [securitytable, setsecuritytable] = useState(false);
    const [complaintstable, setComplaintstable] = useState(false);
    return (
        <div>
            <h1 className="text-2xl flex justify-center ">Admin Page</h1>
            {/* <SignIn></SignIn> */}
            <Stack spacing={2} direction="row" className="justify-around">
                <Button
                    variant="outlined"
                    onClick={() => setResidentform(!residentform)}>
                    Enter Resident Information
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setDependentinfo(!dependentinfo)}>
                    Enter Dependent's Information
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setSecurityform(!security)}>
                    Enter Security Details{' '}
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setEmployeeform(!employee)}>
                    Enter new Employee Details{' '}
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setServiceform(!service)}>
                    Create new service{' '}
                </Button>
            </Stack>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
                {residentform ? (
                    <div>
                        <h1 className="text-2xl flex justify-center ">
                            Enter Resident Info
                        </h1>
                        <div class="flex flex-wrap -mx-3 mb-6"></div>
                        <New_resident></New_resident>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
                {dependentinfo ? (
                    <div>
                        <h1 className="text-2xl flex justify-center ">
                            Enter Dependent's Info
                        </h1>
                        <Dependent></Dependent>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div>
                {security ? (
                    <div>
                        <div class="flex flex-wrap -mx-3 mb-6"></div>
                        <div>
                            <h1 className="text-2xl flex justify-center ">
                                Enter Security
                            </h1>
                            <Security></Security>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
                {employee ? (
                    <div>
                        <div class="flex flex-wrap -mx-3 mb-6"></div>
                        <div>
                            <h1 className="text-2xl flex justify-center ">
                                Enter Employee
                            </h1>
                            <Employee></Employee>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div>
                {service ? (
                    <div>
                        <h1 className="text-2xl flex justify-center ">
                            Enter a new service
                        </h1>
                        <Service></Service>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <div>
                <Stack
                    spacing={2}
                    direction="row"
                    className="justify-around m-2">
                    <Button
                        variant="outlined"
                        onClick={() => setresideflatinfo(!resideflatinfo)}>
                        View Residents And Flat Information
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setservicereqtable(!servicereqtable)}>
                        View Resident's service requests
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setemployeelist(!employeelist)}>
                        View Employees{' '}
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setsecuritytable(!securitytable)}>
                        View Security Details{' '}
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setComplaintstable(!complaintstable)}>
                        View Complaints{' '}
                    </Button>
                </Stack>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
                {resideflatinfo ? <ViewResidents></ViewResidents> : <div></div>}
            </div>
            <div>
                {servicereqtable ? (
                    <ServicesRequested></ServicesRequested>
                ) : (
                    <div></div>
                )}
            </div>
            <div>
                {employeelist ? <EmployeeList></EmployeeList> : <div></div>}
            </div>
            <div>
                {securitytable ? <SecurityTable></SecurityTable> : <div></div>}
            </div>
            <div>
                {complaintstable ? (
                    <ComplaintTable></ComplaintTable>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default Admin;
