'use client';
import UsuarioRegistrado from '@/components/UsuarioRegistrado';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
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
            <UsuarioRegistrado />
            :
            <div className='flex items-center w-full h-full'>
          <div className='flex items-center justify-center h-3/4 w-1/2'>
            <div className='flex flex-col gap-y-8 w-[57%]'>
              <span className='text-3xl font-medium'>Gracias por registrarse. Todo listo para aplicar a certificar UPFC</span>
              <div className='flex flex-col'>
                <span className='text-xl mb-2'>Crear nueva aplicacion</span>
                <input className='p-1.5 rounded bg-gray-200 placeholder:font-light placeholder:text-gray-500 text-black ' placeholder='New minting request name' type="text" />
              </div>
              <button onClick={() => setRegistrado(true)} className='bg-lime-500 rounded py-1.5'>Start your minting request aplication</button>
            </div>
          </div>
          <div className='flex justify-center h-3/4 w-1/2'>
            <div className='flex flex-col gap-y-8 h-full w-[57%]'>
              <div className='flex flex-col items-center justify-center w-full h-full gap-y-4'>
                <span className='text-2xl mb-4'>Aplicaciones pendientes de aprobacion</span>
                {
                  [1,2,3,4].map((x: any, i: number) => (
                    <div className='flex rounded-lg bg-sky-900 w-2/3 h-20 p-2'>
                      <div className='flex flex-col items-center w-full'>
                        <span className='text-lg font-medium'>Name</span>
                        <span>Status</span>
                      </div>
                      <div className='h-full w-1/3 bg-black bg-opacity-40 rounded-lg'>

                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </main>
  )
}
