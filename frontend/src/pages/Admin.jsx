import SignIn from '../components/loginpage';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import New_resident from '../components/admin/forms/resident';
import Security from '../components/admin/forms/security';
import Dependent from '../components/admin/forms/dependent';
import Service from '../components/admin/forms/service';
import Employee from '../components/admin/forms/employee';
const Admin = () => {
    return (
        <div>
        
            <h1 className="text-2xl flex justify-center ">Admin Page</h1>
            <SignIn></SignIn>
            <Stack spacing={2} direction="row" className='justify-around'>
                <Button variant="outlined">Enter Resident Information</Button>
                <Button variant="outlined">Enter Dependent's Information</Button>
                <Button variant="outlined">Enter Security Details </Button>
                <Button variant="outlined">Enter new Employee Details </Button>
                <Button variant="outlined">Create new service </Button>
            </Stack>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
            <h1 className="text-2xl flex justify-center ">
                Enter Resident Info
            </h1>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <New_resident></New_resident>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
            <h1 className="text-2xl flex justify-center ">
                Enter Dependent's Info
            </h1>
            <Dependent></Dependent>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
            <h1 className="text-2xl flex justify-center ">Enter Security</h1>
            <Security></Security>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
            <h1 className="text-2xl flex justify-center ">
                    Enter a new service
            </h1>
            <Service></Service>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <div>
                    <h1 className="text-2xl flex justify-center ">
                        Enter Employee
                    </h1>
                    <Employee></Employee>  
            </div>
            <div class="flex flex-wrap -mx-3 mb-6"></div>
            <Stack spacing={2} direction="row" className='justify-around'>
                <Button variant="outlined">View Residents And Flat Information</Button>
                <Button variant="outlined">View Resident's service requests</Button>
                <Button variant="outlined">View Employees </Button>
                <Button variant="outlined">View Security Details </Button>
                <Button variant="outlined">View Complaints </Button>
            </Stack>
        </div>
    );
};

export default Admin;
