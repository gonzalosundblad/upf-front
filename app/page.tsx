'use client';
import Image from 'next/image'
import { useEffect } from 'react';

export default function Home() {

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
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className='flex  items-center px-4 w-full h-16 bg-black'>
        <div className='h-fill w-fill'>
          <Image
            src="/logo.png"
            alt="UPF Logo"
            className=""
            width={45}
            height={45}
            priority
          />
        </div>
      </div>
      <div className='h-full mt-16 w-full'>
        <Image
          src="/cart.png"
          alt="Cart"
          className=""
          // width={800}
          // height={800}
          fill={true}
          priority
        />
      </div>
    </main>
  )
}
