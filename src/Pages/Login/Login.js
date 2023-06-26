import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [loginError, setLoginError] = useState('')
    const [token] = useToken(loginUserEmail)
    const from = location.state?.from?.pathname || '/'
    // if(token){
    //     navigate(from, {replace: true})
    // }
    const handleLogin = data => {
    
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            toast.success('login successfully...')
            getUserToken(data.email)

        })
        .catch(error => {
            setLoginError(error.message)
        })
    }
    const getUserToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate(from, {replace: true})
            }
        })
      }
    return (
        <div className='h-[600px] items-center justify-center flex'>
           <div className='w-96 shadow-xl py-16 px-5 rounded-xl'>
            <h2 className='text-2xl text-center font-semibold mb-4'>Login</h2>
           <form onSubmit={handleSubmit(handleLogin)}>
                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' name='email' className="input input-bordered w-full " {...register("email", {required: "Email Address is required"})} />
                    {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' name='password' className="input input-bordered w-full " {...register("password", {required: "Password is required",
                    minLength: {value: 6, message: "password must length must be 6 character" }                
                })} />
                    {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                </div>

                <input className='rounded-xl py-2 px-5 bg-slate-700 w-full text-white font-semibold cursor-pointer'  value='Login' type="submit" />
                {loginError && <p className='text-red-500'>{loginError}</p>}
            </form>
            <p className='text-lg mb-2 mt-5'>New to KeepSmile? <Link to ='/register' className='text-primary underline'>Create an account</Link></p>
            <div className=' divider'>OR</div>
            <button className='bg-white btn w-full text-center rounded-lg py-2 px-5 mt-4 btn-outline'>Continue with Google</button>
           </div>
        </div>
    );
};

export default Login;