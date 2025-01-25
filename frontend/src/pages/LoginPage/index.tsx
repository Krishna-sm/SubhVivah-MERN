import { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { RiAccountCircleFill } from 'react-icons/ri'
import { FaEyeSlash } from "react-icons/fa6";
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router';
import { AxiosClient } from '../../config/axiosClient';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';
const LoginPage = () => {
    const [isHide,setIsHide] = useState(true)
    const [loading,setLoading] = useState(false)


        interface LoginFormType{
            email: string;
            password: string;
        }

        const initialValues={
            email:'',
            password:''
        } 
        const validationSchema = yup.object({
            email: yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
        })
        const onSubmitHandler=async (e:LoginFormType,helper:FormikHelpers<LoginFormType>)=>{
           try {
            setLoading(true)
                const response = await AxiosClient.post("/auth/login",e);

                const data = await response.data;

                console.log(data);
                toast.success(data.msg)

                // token save in local storage
                // fetch user profile and save in reducer
                
                helper.resetForm();
           } catch (error:any) {
                toast.error(error.response.data.error);
                
           }finally{
            setLoading(false)
           }
        }

  return (
    <>
            <div className=" w-[96%] lg:w-1/2 mx-auto bg-white rounded-md shadow-lg py-10 my-5 px-10">
                        <div className="mb-3">
                <h2 className="text-gray-700 text-3xl text-center">Sign In</h2>

                        </div>
                       <Formik validationSchema={validationSchema}  initialValues={initialValues} onSubmit={onSubmitHandler}>
                        <Form> 
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
                    <button disabled={loading} type='submit' className="w-full rounded-md border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white border flex items-center justify-center gap-x-3 py-4 font-[PoppinSemibold]">Login{loading && <CgSpinner className='text-3xl animate-spin text-white' />} </button>
                   </div> 
                   <div className="mb-3">
                    <p className="text-center">
                    <Link to={'/forget'} className="text-gray-600 mx-auto text-center font-[PoppinSemibold]">Forget Password?</Link>

                    </p>
                        <p className="text-end text-primary font-[PoppinSemibold]">Dont Have An Account? <Link to={'/register'}>Register</Link></p>
                   </div>
                        </Form>
                       </Formik>
            </div>
    
    </>
  )
}

export default LoginPage