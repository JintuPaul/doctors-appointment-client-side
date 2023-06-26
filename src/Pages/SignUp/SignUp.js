import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)

    // if(token){
    //     navigate('/')
    // }
    const handleSignup = (data) => {
        setSignUpError("")
        createUser(data.email, data.password)
        .then(res => {
            const user = res.user;
          
            toast("signUp Successfully....")
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
               saveUser(data.name, data.email)
            })
            .catch(err => console.log(err))
        })
        .catch(error => {
            setSignUpError(error.message)
        })
    }
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            getUserToken(email)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      const getUserToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/')
            }
        })
      }
      
    return (
        <div className='h-[600px] items-center justify-center flex'>
           <div className='w-96 shadow-xl py-16 px-5 rounded-xl'>
            <h2 className='text-2xl text-center font-semibold mb-4'>Sign Up</h2>
           <form onSubmit={handleSubmit(handleSignup)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' name='name' className="input input-bordered w-full " {...register("name", {required: "Email Address is required"})} />
                </div>
                
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
                    minLength: {value: 6, message: "password must length must be 6 character" },
                    pattern: {value:/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, message: "password must strong"}              
                })} />
                    {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                   
                </div>

                <input  className='rounded-xl cursor-pointer py-2 px-5 bg-slate-700 w-full text-white font-semibold' value='Sign Up' type="submit" />
                {
                    signUpError && <p className='text-red-500'>{signUpError}</p>
                }
            </form>
            <p className='text-lg mb-2 mt-5'>Already have an account <Link to='/login' className='text-primary underline'>Please Login</Link></p>
            <div className=' divider'>OR</div>
            <button className='bg-white btn w-full text-center rounded-lg py-2 px-5 mt-4 btn-outline'>Continue with Google</button>
           </div>
        </div>
    );
};

export default SignUp;