import React, { useState } from 'react';
import { Formik } from 'formik';
import { isValid, z } from 'zod';
import { withZodSchema } from "formik-validator-zod";
import { IF } from './IF';
import ErroreMessageDisplay from './ErroreMessageDisplay';


const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(25, "Name should be at most 25 characters long"),
    email: z.string().email("Invalid email"),
    noticeperiod: z.string().min(1, 'rrrrrr'),
    resume: z
    .any()
    .refine(
      (file) => file && ["application/pdf"].includes(file.type),
      "Only PDF files are allowed"
    )
    
  });
  

const JobApplicationModal = ({ isOpen, closeModal, successMessage, onSubmit }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    noticeperiod: '',
    resume: null

  })

  const initialValues = {
    name: '',
    email: '',
    noticeperiod: '',
    resume: null
  }
  const [loading, setLoading] = useState(false)
  const handleFormSubmit = (values) => {
    onSubmit(values)  
 

  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Apply for Job</h2>
        <p className='text-center text-green-400'>{successMessage}</p>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validate={withZodSchema(RegisterFormSchema)}
          validateOnBlur
          validateOnChange
          validateOnMount
          onSubmit={handleFormSubmit}
        >
          {
            ({ values, handleBlur, touched, handleChange, setFieldValue, errors, handleSubmit, isValid, isSubmitting }) => {
               
              return <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}

                  />
                  <IF condition={touched.name && errors.name}>
                    <ErroreMessageDisplay errorMeassage={errors.name} />
                  </IF>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}

                  />
                  <IF condition={touched.email && errors.email}>
                    <ErroreMessageDisplay errorMeassage={errors.email} />
                  </IF>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Notice Period
                  </label>
                  <select
                    type="option"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    name='noticeperiod'
                    onChange={(val) => setFieldValue('noticeperiod', val.target.value)}
                    value={values.noticeperiod}
                    onBlur={handleBlur}
                  >
                    <option value='' disabled>Notice period</option>
                    <option value='Immediate Joiner'>Immediate Joiner</option>
                    <option value='0-15'>0-15</option>
                    <option value='15-30'>15-30</option>
                  <option value='30-45'>30-45</option>
                  <option value='45-60'>45-60</option>
                  </select>
                  <IF condition={touched.noticeperiod && errors.noticeperiod}>
                    <ErroreMessageDisplay errorMeassage={errors.noticeperiod} />
                  </IF>
                </div>


                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                    Resume
                  </label>
                  <input
                    id="resume"
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    name='resume'
                    onChange={(e)=>{
                      const  file=e.target.files[0];  
                      setFieldValue("resume",file)
                    }}
                    onBlur={handleBlur}

                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
                  >
                  Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? 'Applying' : 'Apply'}
                  </button>
                </div>
              </form>
            }
          }

        </Formik>

      </div>
    </div>
  );
};

export default JobApplicationModal;
