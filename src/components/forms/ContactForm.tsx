"use client"
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   phone: number;
   company: string;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      phone: yup
         .number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      company: yup.string().required().label("Company"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Comment sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" {...register("name")} name="name" placeholder="Enter you name" />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="email" {...register("email")} name="email" placeholder="Enter you email" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="number" {...register("phone")} name="number" placeholder="Mobile no" />
                  <p className="form_error">{errors.phone?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <input type="text" {...register("company")} name="company" placeholder="Company" />
                  <p className="form_error">{errors.company?.message}</p>
               </div>
            </div>
         </div>
         <div className="form-grp">
            <textarea {...register("message")} placeholder="Enter you message....."></textarea>
                  <p className="form_error">{errors.message?.message}</p>
         </div>
         <button type="submit" className="btn">Send Message</button>
      </form>
   )
}

export default ContactForm
