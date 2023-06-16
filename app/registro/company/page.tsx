'use client';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CompaniaRegistrada from '@/components/CompaniaRegistrada';

export default function CompanyRegistry() {
  const router = useRouter()
  const [registrado, setRegistrado] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        // const response = await fetch('https://upfapp.herokuapp.com/api/enterprise/home');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        // Handle the response data
        console.log('dataaa',data);
      } catch (error) {
        // Handle any errors that occurred during the request

        console.error('nooo', error);
      }
    };

    fetchData();
    console.log('ola')
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cart bg-[bottom_left_30rem] bg-[length:1100px_1500px]">
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full h-screen flex-col items-center justify-between bg-gradient-to-r from-sky-950 via-sky-950 to-lime-500">
        <Navbar />
        {
            registrado ?
            <CompaniaRegistrada />
            :
            <div className='flex items-center w-full h-full'>
          <div className='flex px-24 mx-32 h-3/4 w-1/2'>
            <div className='flex flex-col gap-y-8 w-[57%]'>
              <span className='text-3xl font-medium'>REGISTRA TU COMPANIA</span>
              <div className='flex flex-col gap-y-3'>
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='CUIT' type="text" /> 
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Country' type="text" /> 
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='City' type="text" />
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Numbers of Employees' type="text" />
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Anual Invoicing' type="text" />
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Mipyme Categrory' type="text" />
              </div>
              <button onClick={() => setRegistrado(true)} className='bg-lime-500 rounded py-1.5 bg-opacity-80'>Submit</button>
            </div>
          </div>
        </div>
        }
      </div>
    </main>
  )
}
