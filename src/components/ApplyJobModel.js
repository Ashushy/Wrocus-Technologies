import React from 'react';
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
  if (!isOpen) return null;

  const initialValues = {
    name: '',
    email: '',
    noticeperiod: '',
    contactNumber: '',
    currentCTC: '',
    expectedCTC: '',
    currentOrganization: '',
    willingToRelocate: false,
    resume: null
  };

  const handleFormSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Apply for Job</h2>
        <p className='text-center text-green-400'>{successMessage}</p>
        <Formik
          initialValues={initialValues}
          validate={withZodSchema(RegisterFormSchema)}
          onSubmit={handleFormSubmit}
        >
          {({ values, handleChange, handleBlur, setFieldValue, errors, handleSubmit, touched, isSubmitting, isValid }) => (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" onChange={handleChange} onBlur={handleBlur} value={values.name} className="w-full p-2 border rounded-md mb-3" />
              <IF condition={touched.name && errors.name}><ErroreMessageDisplay errorMeassage={errors.name} /></IF>

              <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="w-full p-2 border rounded-md mb-3" />
              <IF condition={touched.email && errors.email}><ErroreMessageDisplay errorMeassage={errors.email} /></IF>

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
                  {isSubmitting ? 'Applying' : 'Apply'}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobApplicationModal;
