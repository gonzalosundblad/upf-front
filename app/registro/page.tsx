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
        // const response = await fetch('');
        const response = await fetch('https://upfapp.herokuapp.com/users/register/api');
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
  }, []);

  const hitAPI = async() => {
      const body: any = {
        name: 'asdasdasd',
        email: 'gonzalo@asd.com',
        address: 'asd',
        category: '1',
        password: 'asd',
        suscription: 'on'
      }
      try {
        const response = await fetch('https://upfapp.herokuapp.com/users/register/api', {
          method: 'POST',
          // body: body
          body: JSON.stringify({ body }),
        })
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data2 = await response.json();
        // Handle the response data
        console.log('dataaa',data2);
      } catch(err) {
        console.error(err)
      }
  }

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
          <div className='flex px-24 mx-32 h-3/4 w-1/2'>
            <div className='flex flex-col gap-y-8 w-[57%]'>
              <span className='text-3xl font-medium'>REGISTRATE</span>
              <div className='flex flex-col gap-y-3'>
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su nombre' type="text" /> 
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su apellido' type="text" /> 
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su email' type="text" />
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su contraseña' type="text" />
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Confirme su contraseña' type="text" />
              </div>
              <button onClick={() => hitAPI()} className='bg-lime-500 rounded py-1.5 bg-opacity-80'>Registrarme</button>
              <div className='text-lg font-thin'>
                <span>¿Ya tenés una cuenta?</span>
                <button onClick={() => router.push('/')} className='mx-2 text-lime-500'>Ingresa</button>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </main>
  )
}
