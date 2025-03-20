
import React, { useState } from 'react';
import { Formik } from 'formik';
import { z } from 'zod';
import { withZodSchema } from "formik-validator-zod";
import { IF } from './IF';
import ErroreMessageDisplay from './ErroreMessageDisplay';

const RegisterFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(25, "Name should be at most 25 characters long"),
  email: z.string().email("Invalid email"),
  noticeperiod: z.string().min(1, 'Notice period is required'),
  contactNumber: z.string().min(10, "Contact Number must be 10 digits").max(15, "Contact Number is too long"),
  date: z.string().optional(), // Make date optional since we're auto-filling it
  currentCTC: z.string().min(1, "Current CTC is required"),
  expectedCTC: z.string().min(1, "Expected CTC is required"),
  currentOrganization: z.string().min(1, "Current Organization is required"),
  willingToRelocate: z.boolean(),
  resume: z.any().refine(
    (file) => file && ["application/pdf"].includes(file.type),
    "Only PDF files are allowed"
  )
});


const JobApplicationModal = ({ isOpen, closeModal, successMessage, onSubmit, jobLocation }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  if (!isOpen) return null;

  const getFormattedDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-CA'); // 'en-CA' ensures YYYY-MM-DD format
};

const initialValues = {
    name: '',
    email: '',
    noticeperiod: '',
    contactNumber: '',
    date: getFormattedDate(), // Call function for formatted date
    currentCTC: '',
    expectedCTC: '',
    currentOrganization: '',
    willingToRelocate: false,
    resume: null
};



  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form fields before submission", values);
    onSubmit(values); // Pass Formik's values directly

    setTimeout(() => {
        setSubmitting(false);
        setFormSubmitted(true);
        resetForm();
        setTimeout(() => {
            setFormSubmitted(false);
            closeModal();
        }, 3000);
    }, 2000);
};


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
      <div className="bg-white p-8 rounded-lg w-1/2 relative" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4 text-center">Apply for Job</h2>
        
        {formSubmitted ? (
          <div className="text-center text-green-600 text-xl font-semibold">
            ✅ Successfully Submitted!
          </div>
        ) : (
          <Formik initialValues={initialValues} validate={withZodSchema(RegisterFormSchema)} onSubmit={handleFormSubmit}>
            {({ values, handleChange, handleBlur, setFieldValue, errors, handleSubmit, touched, isSubmitting, isValid }) => (
              <div className="relative">
                {/* Loader Overlay (Shows when submitting) */}
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                    <div className="flex flex-col items-center">
                      <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path>
                      </svg>
                      <p className="text-blue-600 font-semibold mt-2">Submitting...</p>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="relative z-0">
                  <input type="text" name="name" placeholder="Full Name" onChange={handleChange} onBlur={handleBlur} value={values.name} className="w-full p-2 border rounded-md mb-3" />
                  <IF condition={touched.name && errors.name}><ErroreMessageDisplay errorMeassage={errors.name} /></IF>

                  <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="w-full p-2 border rounded-md mb-3" />
                  <IF condition={touched.email && errors.email}><ErroreMessageDisplay errorMeassage={errors.email} /></IF>

                  {/* <input type="date" name="date" onChange={handleChange} onBlur={handleBlur} value={values.date} className="w-full p-2 border rounded-md mb-3" />
                  <IF condition={touched.date && errors.date}><ErroreMessageDisplay errorMeassage={errors.date} /></IF> */}

                  <select name="noticeperiod" onChange={handleChange} onBlur={handleBlur} value={values.noticeperiod} className="w-full p-2 border rounded-md mb-3">
                   <option value='' disabled>Notice Period</option>
                   <option value='Immediate Joiner'>Immediate Joiner</option>
                   <option value='0-15'>0-15</option>
                   <option value='15-30'>15-30</option>
                   <option value='30-45'>30-45</option>
                   <option value='45-60'>45-60</option>
               </select>
                 <IF condition={touched.noticeperiod && errors.noticeperiod}><ErroreMessageDisplay errorMeassage={errors.noticeperiod} /></IF>

                 <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} onBlur={handleBlur} value={values.contactNumber} className="w-full p-2 border rounded-md mb-3" />
                 <IF condition={touched.contactNumber && errors.contactNumber}><ErroreMessageDisplay errorMeassage={errors.contactNumber} /></IF>

                <input type="text" name="currentCTC" placeholder="Current CTC" onChange={handleChange} onBlur={handleBlur} value={values.currentCTC} className="w-full p-2 border rounded-md mb-3" />
               <IF condition={touched.currentCTC && errors.currentCTC}><ErroreMessageDisplay errorMeassage={errors.currentCTC} /></IF>

                 <input type="text" name="expectedCTC" placeholder="Expected CTC" onChange={handleChange} onBlur={handleBlur} value={values.expectedCTC} className="w-full p-2 border rounded-md mb-3" />
                 <IF condition={touched.expectedCTC && errors.expectedCTC}><ErroreMessageDisplay errorMeassage={errors.expectedCTC} /></IF>

               <input type="text" name="currentOrganization" placeholder="Current Organization" onChange={handleChange} onBlur={handleBlur} value={values.currentOrganization} className="w-full p-2 border rounded-md mb-3" />
                 <IF condition={touched.currentOrganization && errors.currentOrganization}><ErroreMessageDisplay errorMeassage={errors.currentOrganization} /></IF>

                <div className="flex items-center mb-3">
                  <input type="checkbox" name="willingToRelocate" checked={values.willingToRelocate} onChange={handleChange} className="mr-2" />
                  <label>Are you willing to relocate to {jobLocation || "job location"}?</label>
              </div>

               <input id="resume" type="file" name='resume' onChange={(e) => setFieldValue("resume", e.target.files[0])} className="w-full p-2 border rounded-md mb-3" />
               <IF condition={touched.resume && errors.resume}><ErroreMessageDisplay errorMeassage={errors.resume} /></IF>

                  <div className="flex justify-end">
                    <button type="button" onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded mr-4">Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded" disabled={isSubmitting || !isValid}>
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};
export default JobApplicationModal;

