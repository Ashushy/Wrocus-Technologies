import React, { useState } from 'react'

const AddNewFields = ({ fieldName, open,onClose }) => {
    if (!open) {
        return null;
    }
    const[newFiled,setNewField]=useState({
          newData:''
    })

    const handleChange=(e)=>{
        setNewField({...newFiled,[e.target.name]:e.target.value})

    }
    const handleAddNewSubmit=(e)=>{
        e.preventDefault()
        alert(newFiled.newData)
        onClose(false)
    }
    
    return (
        <>
            <section className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                <div className='bg-white rounded-lg shadow-lg w-96 p-6 relative'>
                <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                        aria-label="Close"
                    >
                        Close
                    </button>
                    <p className='text-center mb-4'>Please add new field here</p>
                    <form onSubmit={handleAddNewSubmit} className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              
            </label> */}
                        <input
                            id="email"
                            type="text"
                            placeholder="Add New fields"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                          name='newData'
                          onChange={handleChange}
                          value={newFiled.newData}
                        />
                          <button
                        type="submit"
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  mt-4 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add
                    </button>
                    </form>
                  

                </div>

            </section>
        </>
    )
}

export default AddNewFields