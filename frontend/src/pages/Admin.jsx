import SignIn from "../components/loginpage";

const Admin = () => {
    return (
        <div>
            <h1 className="text-2xl flex justify-center ">Admin Page</h1>
            <SignIn></SignIn>
            <form className="flex justify-around">
                <div className="justify-self-start">
                    <label htmlFor="aadhar" className="text-md mx-2">
                        Aadhar
                    </label>
                    <input
                        type="text"
                        id="aadhar"
                        className="border-0 border-b-2"
                        placeholder="Enter Aadhar Number"
                    />
                    <label htmlFor="name" className="text-md mx-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        className="border-0 border-b-2"
                        placeholder="Enter First"
                    />
                    <label htmlFor="aadhar" className="text-md mx-2">
                        Aadhar
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="border-0 border-b-2"
                        placeholder="Enter Aadhar Number"
                    />
                </div>
                <div className="justify-self-end">
                    <label htmlFor="name" className="text-md mx-2">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="border-0 border-b-2"
                        placeholder="Enter Phone Number"
                    />
                </div>
            </form>
        </div>
    );
};

export default Admin;
