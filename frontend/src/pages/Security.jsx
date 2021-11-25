import SignIn from '../components/loginpage';
import React, { useEffect, useState } from 'react';
import axios from '../axios';
//import axios from '../../../axios';

const Security = () => {
    const [visitorFlatID, setvisitorFlatID] = useState('');
    const [visitorFname, setvisitorFname] = useState('');
    const [visitorLname, setvisitorLname] = useState('');
    const [visitorPH, setvisitorPH] = useState('');
    const [visitorPurpose, setvisitorPurpose] = useState('');
    const entervisitordata = async (e) => {
        e.preventDefault();
        try {
            //console.log(visitorFlatID,visitorFname,visitorLname,visitorPH,visitorPurpose)
            const visitorobj = {
                flatid: visitorFlatID,
                fname: visitorFname,
                lname: visitorLname,
                purpose: visitorPurpose,
                phone: visitorPH,
            };
            const response = await axios.post(
                'security/security_visitor_add',
                visitorobj
            );
        } catch (error) {
            console.log(error);
        }
    };
    const [visitorID, setvisitorID] = useState('');
    const updatevisitordata = async (e) => {
        e.preventDefault();
        try {
            const updatevisitorobj = {
                visitorid: visitorID,
            };
            const response = await axios.post(
                'security/security_visitor_update',
                updatevisitorobj
            );
            setvisitorID('')
        } catch (error) {
            console.log(error);
        }
    };
    const [flatid, setflatID] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const viewResidentName = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`security/${flatid}`);
            console.log(response.data);
            setfname(response.data.fname)
            setlname(response.data.lname)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h1 className="text-2xl flex justify-center ">Security Page</h1>
            {/* <SignIn></SignIn> */}
            <h1 className="text-2xl flex justify-center ">
                Enter Visitor Details
            </h1>
            <div className="flex justify-center box-border mt-5">
                <form className="w-full max-w-lg" onSubmit={entervisitordata}>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-first-name">
                                Flat ID
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Enter Visiting Flat ID"
                                onChange={(e) =>
                                    setvisitorFlatID(e.target.value)
                                }
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Enter First Name"
                                onChange={(e) =>
                                    setvisitorFname(e.target.value)
                                }
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Enter Last Name"
                                onChange={(e) =>
                                    setvisitorLname(e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-name">
                                Purpose
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Enter Purpose"
                                onChange={(e) =>
                                    setvisitorPurpose(e.target.value)
                                }
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-name">
                                Phone Number
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="phone"
                                placeholder="xxxxxxxxxx"
                                onChange={(e) => setvisitorPH(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6 mt-5">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Alert Resident
                        </button>
                    </div>
                </form>
            </div>
            <h1 className="text-2xl flex justify-center ">
                Enter Resident's Flat Number
            </h1>
            <div className="flex justify-center box-border mt-3">
                <form className="w-full max-w-lg" onSubmit={viewResidentName}>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-first-name">
                                Flat Number
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Enter Flat Number"
                                onChange={(e) => setflatID(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            View Resident's Name
                        </button>
                    </div>
                </form>
                {fname&&lname?(
                    <div>
                        {fname} {lname}
                    </div>
                ):''}
            </div>
            <h1 className="text-2xl flex justify-center ">Visitor Exit</h1>
            <div className="flex justify-center box-border mt-4">
                <form className="w-full max-w-lg" onSubmit={updatevisitordata}>
                    <div className="flex justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-first-name">
                                Visitor ID
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Enter Visitor ID"
                                onChange={(e) => setvisitorID(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center -mx-3 mb-6">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Visitor Exited
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Security;
