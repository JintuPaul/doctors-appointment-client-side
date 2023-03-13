import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='h-[600px] items-center my-16 justify-center flex'>
           <div className='w-96 shadow-xl py-16 px-5 rounded-xl'>
            <h2 className='text-2xl text-center font-semibold mb-4'>Register</h2>
           <form>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' name='name' className="input input-bordered w-full " placeholder='Name' />
                </div>
                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' name='email' className="input input-bordered w-full " placeholder='Email'/>
                    <p role="alert" className='text-red-600'></p>
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' name='password' className="input input-bordered w-full"placeholder='password' />
                <p role="alert" className='text-red-600'></p>
                </div>

                <input className='rounded-xl py-2 px-5 bg-slate-700 w-full text-white font-semibold cursor-pointer'  value='Register' type="submit" />
                <p className='text-red-500'></p>
            </form>
            <p className='text-lg mb-2 mt-5'>Already have an account <Link to='/login' className='text-primary underline'>Please Login</Link></p>
            <div className=' divider'>OR</div>
            <button className='bg-white btn w-full text-center rounded-lg py-2 px-5 mt-4 btn-outline'>Continue with Google</button>
           </div>
        </div>
    );
};

export default SignUp;