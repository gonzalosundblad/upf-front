'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter()

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cart bg-[bottom_left_30rem] bg-[length:1100px_1500px]">
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full h-screen flex-col items-center justify-between bg-gradient-to-r from-sky-950 via-sky-950 to-lime-500">
        <Navbar />
        <div className='flex items-center w-full h-full'>
          <div className='flex p-24 mx-32 h-3/4 w-1/2'>
            <div className='flex flex-col gap-y-8 w-[57%]'>
              <span className='text-3xl'>INGRESÁ</span>
              <div className='flex flex-col gap-y-3'>
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light placeholder:text-base tracking-wider text-white' placeholder='Ingrese su email' type="text" />
                <input className='p-1.5 rounded bg-gray-600 placeholder:font-light placeholder:text-base tracking-wider text-white' placeholder='Ingrese su contraseña' type="text" />
              </div>
              <button className='bg-lime-500 rounded py-1.5 bg-opacity-80'>Ingresar</button>
              <div className='font-thin text-lg'>
                <span>¿Todavía no tenés una cuenta?</span>
                <button onClick={() => router.push('/registro')} className='mx-2 text-lime-500'>Registrate</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='h-full mt-16 w-full z-0'>
          <Image
            src="/cart.png"
            alt="Cart"
            className=""
            // width={800}
            // height={800}
            fill={true}
            priority
          />
        </div> */}
      </div>
    </main>
  )
}
