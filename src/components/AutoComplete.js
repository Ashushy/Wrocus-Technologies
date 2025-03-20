import { autoCompletedataFetcher } from '@/app/GenericServices/GenericServices';
import React, { useState } from 'react'

export default function AutoComplete({
    label = '',
    onChange = () => {},
    value,
    name,
    searchType,

}) {

    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchOptions =  async () => {
        setLoading(true)
       const data = await autoCompletedataFetcher(searchType);
       console.log({data});
       setLoading(false)
       
       setOptions(data);       
    };

  return (
    <div className="mb-4 mt-3">
                    <label className="block text-sm  mb-2" htmlFor="location">
                        {label}
                    </label>
                    <select
                        name={name}
                        onChange={onChange}
                        value={value}
                        onClick={fetchOptions}
                        id="location" 
                        className="block w-full text-sm p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value=''>None</option> 
                        {loading ? (
                            <option>Loading...</option> // Show loading while fetching
                        ) : options.length > 0 ? (
                            options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))
                        ) : (
                            <option disabled>No options available</option> // Fallback if no data
                        )}
                    </select>
                </div>
  )
}
