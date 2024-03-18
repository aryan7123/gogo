import Link from 'next/link'
import React from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const page = () => {
  return (
    <>
        <main className='login-cover flex items-center justify-center md:px-0 px-8'>
            <section className='bg-white overflow-hidden login-card w-[inherit] md:max-w-5xl rounded-md'>
                <div className='flex md:flex-row flex-col items-start justify-start'>
                    <div className='card-img w-full md:w-[40%] md:h-[70vh]'>
                        <div className='flex flex-col justify-start items-start px-10 py-8'>
                            <h3 className='md:text-3xl text-xl text-white font-semibold mb-3'>MAGIC IS IN THE <br /> DETAILS</h3>
                            <span className='text-white text-sm font-medium'>Please use your credentials to login.</span>
                            <span className='text-white text-sm font-medium'>If you are not a member, please register.</span>
                        </div>
                    </div>
                    <div className='w-full md:w-[60%] px-10 py-8'>
                        <div className='gogo-logo mb-8'></div>
                        <h3 className='text-lg font-semibold text-[#3a3a3a]'>LOGIN</h3>
                        <div className='flex flex-col gap-2 w-full mt-8'>
                            <label htmlFor="email" className='text-[#3a3a3a] text-sm font-medium'>E-mail</label>
                            <input type="email" name='email' className='border p-1.5 rounded border-[#d7d7d7] text-sm text-[#3a3a3a] outline-none'/>
                        </div>
                        <div className='flex flex-col gap-2 w-full mt-4'>
                            <label htmlFor="password" className='text-[#3a3a3a] text-sm font-medium'>Password</label>
                            <div className='flex items-center justify-between border p-1.5 rounded border-[#d7d7d7]'>
                                <input type="password" name='password' className='w-full text-sm text-[#3a3a3a] outline-none'/>
                                <FaRegEye size={16} className='cursor-pointer mr-1.5'/>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between mt-6">
                            <div className='flex flex-col gap-1.5'>
                                <Link href="/forgot-password" className='text-sm font-medium text-[#3a3a3a] hover:text-[#00365a]'>
                                    Forget Password?
                                </Link>
                                <Link href="/register" className='text-sm font-medium text-[#3a3a3a] hover:text-[#00365a]'>
                                    Don`t have an account? Register 
                                </Link>
                            </div>
                            <button type="button" className='uppercase bg-[#00365a] text-sm font-semibold w-28 login-btn py-2.5 text-white rounded-3xl border border-[#00365a] transition-colors hover:bg-[#001e31] hover:border-[#001e31]'>login</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default page