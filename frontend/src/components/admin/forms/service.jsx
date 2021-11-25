import React, { useState } from 'react'
import axios from '../../../axios';

export default function Service({toggleForm}) {
    const [servicename,setservicename]=useState('');
    const [cost,setcost]=useState('');
    const enterservice=async(e)=>{
        e.preventDefault();
        try{
            const service={
                    type:servicename,
                    cost:cost,
            }
            const response = await axios.post('admin/service',service);
            console.log(response.status);
            setservicename('');
            setcost('');
            toggleForm(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    return (
        <div>
            <div className="flex justify-center box-border">
            <form class="w-full max-w-lg mb-6" onSubmit={enterservice}> 
            <div class="flex flex-wrap -mx-3 mb-6"></div>
                <div class="flex justify-center -mx-3 mb-6">
                                <div  class="w-full md:w-1/2 px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name">
                                    Service Name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="Cleaning"
                                    value={servicename}
                        onChange = {(e)=>setservicename(e.target.value)}
                                />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name">
                                    Cost
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="100"
                                    value={cost}
                        onChange = {(e)=>setcost(e.target.value)}
                                />
                                </div>
                            </div>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Create a new service
                            </button>
                        </form>
        </div>
  </div>
    )
}
