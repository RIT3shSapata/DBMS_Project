const Security = () => {
    return (
        <div>
            <h1 className="text-3xl">Security Page</h1>
            <h1 className="text-xl">Enter Visitor Details</h1>
            <form className="flex justify-around">
                <div className="justify-self-start">
                    <label htmlFor="flatid" className="text-md mx-2">
                        FlatNumber
                    </label>
                    <input
                        type="text"
                        id="flatid"
                        className="border-0 border-b-2"
                        placeholder="Enter Aadhar Number"
                    />
                    <label htmlFor="fname" className="text-md mx-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        className="border-0 border-b-2"
                        placeholder="Enter First name"
                    />
                    <label htmlFor="lname" className="text-md mx-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        className="border-0 border-b-2"
                        placeholder="Enter Last Name"
                    />
                    <label htmlFor="Purpose" className="text-md mx-2">
                        Purpose
                    </label>
                    <input
                        type="text"
                        id="purpose"
                        className="border-0 border-b-2"
                        placeholder="Enter Purpose"
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

export default Security;
