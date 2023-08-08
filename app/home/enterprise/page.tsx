'use client';
import UsuarioRegistrado from '@/components/UsuarioRegistrado';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EnterpriseHome() {
  const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://upfapp.herokuapp.com/enterprise/home/api', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2NCwiZW1haWwiOiJnb240QGdtYWlsLmNvbSIsImFkZHJlc3MiOiIxMjMiLCJ1c2VyQ2F0ZWdvcnkiOiJlbnRlcnByaXNlIiwicmVnaXN0ZXJlZCI6MCwiaWF0IjoxNjkxNTI2NzM5fQ.hSl0LBjg2EuTh7uu1MIjFMVYWysruC7QhPPSxtLffrs',
            'Content-Type': 'application/json'
          },
        });
        console.log('response', response.body)
        if (!response.ok) {
          throw new Error('Request failed');
        }
        // const data = await response.json();
        // Handle the response data
        // console.log('dataaa',data);
      } catch (error) {
        // Handle any errors that occurred during the request

        console.error('nooo', error);
      }
    };

    fetchData();
    console.log('ola')
  }, []); // Empty dependency array to run the effect only once on component mount

  const StartMinting = () => {
    router.push('/minting/step-one')
  }

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cart bg-[bottom_left_30rem] bg-[length:1100px_1500px]">
    <div className="flex flex-col items-center justify-between">
      <div className="flex w-full flex-col items-center justify-between bg-upfc-blue">
        <Navbar />
          <div className='flex flex-col items-center w-full h-full px-24 py-8'>
            <div className='flex flex-col gap-y-8 w-1/3 bg-upfc-gray rounded-lg px-12 py-8'>
              {/* <span className='text-3xl font-medium'>Gracias por registrarse. Todo listo para aplicar a certificar UPFC</span> */}
              <div className='flex flex-col'>
                <span className='text-xl mb-4'>Nueva Aplicacion de Certificacion UPFC</span>
                <input className='p-1.5 rounded bg-white bg-opacity-20 placeholder:font-light placeholder:text-gray-100 text-black ' placeholder='Name' type="text" />
              </div>
              <button onClick={() => StartMinting()} className='bg-upfc-lime rounded-lg text-black py-1.5'>Start Your Minting Request Aplication</button>
            </div>
            <div className='w-full mt-16 overflow-auto'>
                <span className='font-medium text-lg'>MINTING REQUESTS</span>
                <div className='flex grid grid-cols-4 gap-x-12 mt-4 gap-y-12'>
                    {
                        [1,2,3,4,5,6,7,8].map((x: any, i: number) => {
                            return (
                                <div key={i} className='bg-upfc-gray rounded-lg p-4'>
                                    <div className='h-48 w-full bg-white bg-opacity-20 rounded-lg'></div>
                                    <div className='flex flex-col items-start'>
                                        <span className='text-xl font-medium mt-1'>CUCHARITAS</span>
                                        <span className='text-sm'>Ornella Freddo</span>
                                        <span className='font-medium text-sm bg-[#FBFF47] mt-2 p-1 rounded-lg text-black'>Assign to validator</span>
                                        <button className='p-2 bg-upfc-lime rounded-lg mt-2 text-black w-full font-normal'>Ver mas</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
