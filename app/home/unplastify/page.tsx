'use client';
import UsuarioRegistrado from '@/components/UsuarioRegistrado';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const pendings = [1,2,3,4,5,6]

export default function UnplastifyHome() {
  const router = useRouter()
  const [registrado, setRegistrado] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://upfapp.herokuapp.com/unplastify/home/api');
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
    <main className="flex min-h-full overflow-auto flex-col items-center justify-between bg-upfc-blue">
        <Navbar />
      <div className="flex w-full flex-col items-center justify-between">
        <div className='h-full w-full px-24 py-8'>
            <span className='text-3xl font-medium'>UNPLASTIFY DASHBOARD</span>
            <div className='flex w-full justify-between h-1/6 gap-x-16 mt-10'>
                <div className='flex h-full w-1/4 bg-upfc-gray rounded-lg overflow-hidden'>
                    <div className='w-[7%] bg-[#38B6FF]'></div>
                    <div className='flex flex-col p-3'>
                        <span className='font-thin text-white'>TOTAL ENTERPRISES REGISTERED</span>
                        <span className='text-5xl mt-2 font-medium'>6</span>
                    </div>
                </div>
                <div className='flex h-full w-1/4 bg-upfc-gray rounded-lg overflow-hidden'>
                    <div className='w-[7%] bg-upfc-lime'></div>
                    <div className='flex flex-col p-3'>
                        <span className='font-thin text-white'>TOTAL ENTERPRISES REGISTERED</span>
                        <span className='text-5xl mt-2 font-medium'>6</span>
                    </div>
                </div>
                <div className='flex h-full w-1/4 bg-upfc-gray rounded-lg overflow-hidden'>
                    <div className='w-[7%] bg-[#FBFF47]'></div>
                    <div className='flex flex-col p-3'>
                        <span className='font-thin text-white'>TOTAL ENTERPRISES REGISTERED</span>
                        <span className='text-5xl mt-2 font-medium'>6</span>
                    </div>
                </div>
                <div className='flex h-full w-1/4 bg-upfc-gray rounded-lg overflow-hidden'>
                    <div className='w-[7%] bg-[#E38F11]'></div>
                    <div className='flex flex-col p-3'>
                        <span className='font-thin text-white'>TOTAL ENTERPRISES REGISTERED</span>
                        <span className='text-5xl mt-2 font-medium'>6</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full mt-12'>
                <span className='font-medium text-lg'>PENDING REGISTRATIONS</span>
                <div className='flex flex-col w-full justify-between h-1/6 bg-upfc-gray gap-x-16 mt-4 px-7 py-5 rounded-lg'>
                    <div className='flex w-full justify-between h-full w-full text-black mb-3 font-medium'>
                        <span>Name</span>
                        <span>Category</span>
                        <span>Email</span>
                        <span>Address</span>
                        <span>Created At</span>
                    </div>
                    <div className='mb-3'>
                        {
                            pendings.map((x: any, i: number) => {
                                return (
                                    <div key={i} className='flex w-full justify-between h-full w-full border-b border-white border-opacity-30 py-1'>
                                        <span>Name</span>
                                        <span>Category</span>
                                        <span>Email</span>
                                        <span>Address</span>
                                        <span>Created At</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='mt-16 overflow-auto'>
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
    </main>
  )
}
