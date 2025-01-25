import { useState } from 'react'
import { FaRegEye, FaRegUser } from 'react-icons/fa'
import { RiAccountCircleFill } from 'react-icons/ri'
import { FaEyeSlash } from "react-icons/fa6";
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router';
const RegisterPage = () => {
    const [isHide,setIsHide] = useState(true)


        interface RegisterFormProps{
            name: string;
            email: string;
            password: string;
        }

        const initialValues={
            name:'',
            email:'',
            password:''
        } 
        const validationSchema = yup.object({
            name: yup.string().required("Name is Required"),
            email: yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
        })
        const onSubmitHandler=(e:RegisterFormProps,helper:FormikHelpers<RegisterFormProps>)=>{
           try {
                console.log(e);
                helper.resetForm();
                
           } catch (error) {
                console.log(error);
                
           }
        }

  return (
    <>
            <div className=" w-[100%] lg:w-1/2 mx-auto bg-white rounded-md shadow-lg py-10 my-5 px-10">
                        <div className="mb-3">
                <h2 className="text-gray-700 text-3xl text-center">Sign Up</h2>

                        </div>
                       <Formik validationSchema={validationSchema}  initialValues={initialValues} onSubmit={onSubmitHandler}>
                        <Form> 
                        <div className="mb-3">
                            <div className=" flex  items-center justify-between border">
                   <button type="button" className='text-4xl p-2 text-primary border-r-2'>  
                    <FaRegUser  className=' '/> 

                    </button>
                    <Field name="name" type="text" placeholder='Enter Your Name*' className='w-full text-lg outline-none border-none px-3' />
                   </div>
                   <ErrorMessage className='text-red-500 text-sm' component={'p'} name='name'/>
                            </div>
                            <div className="mb-3">
                            <div className=" flex  items-center justify-between border">
                   <button type="button" className='text-4xl p-2 text-primary border-r-2'>  
                    <RiAccountCircleFill className=' '/> 

                    </button>
                    <Field name="email" type="text" placeholder='Enter Your Email*' className='w-full text-lg outline-none border-none px-3' />
                   </div>
                   <ErrorMessage className='text-red-500 text-sm' component={'p'} name='email'/>
                            </div>
                        <div className="mb-3">
                        <div className=" flex  items-center justify-between border">
                    <Field name="password" type={isHide?"password":"text"} placeholder='Enter Your Password*' className='w-full text-lg outline-none border-none px-3' />
                   <button onClick={()=>setIsHide(!isHide)} type="button" className='text-4xl p-2 text-primary border-r-2'>  
                    {isHide?<FaEyeSlash/>
                    :<FaRegEye  className=' '/> 
}
                    </button>
                   </div>
                   <ErrorMessage className='text-red-500 text-sm' component={'p'} name='password'/>
                        </div>
                   <div className="mb-3">
                    <button type='submit' className="w-full rounded-md border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white border py-4 font-[PoppinSemibold]">Register</button>
                   </div> 
                   <div className="mb-3">
                     
                        <p className="text-end text-primary font-[PoppinSemibold]">Already Have An Account? <Link to={'/login'}>Login</Link></p>
                   </div>
                        </Form>
                       </Formik>
            </div>
    
    </>
  )
}

export default RegisterPage