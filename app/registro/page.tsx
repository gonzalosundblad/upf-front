'use client';
import UsuarioRegistrado from '@/components/UsuarioRegistrado';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [registrado, setRegistrado] = useState<boolean>(false)
  const [userData, setUserData] = useState<any>({
    name: '',
    email: '',
    type: '',
    eth: '',
    password: ''
  })

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
        name: userData.name,
        email: userData.email,
        address: userData.eth,
        category: userData.type,
        password: userData.password,
        suscription: 'on'
      }
      try {
        const response = await fetch('https://upfapp.herokuapp.com/users/register/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
        })
        if(!response.ok) {
          throw new Error('Request failed');
        }
        console.log('responseee', response)
        // Handle the response data
        setRegistrado(true)
      } catch(err) {
        console.error(err)
      }
  }

  const handleInputChange = (e: any) => {
    setUserData({
      ...userData, // spread existing state
      [e.target.name]: e.target.value, // overwrite 'name' with new value
    });
  };
console.log('userdata', userData)
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
                <input onChange={handleInputChange} name='name' className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su nombre' type="text" /> 
                <input onChange={handleInputChange} name='email' className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su email' type="text" />
                <select onChange={handleInputChange} className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' name="type" id="">
                  <option value="text-white text-opacity-10">Tipo de usuario...</option>
                  <option value="1">Enterprise</option>
                  <option value="2">Individuo</option>
                  <option value="3">Ingles</option>
                  <option value="4">español</option>
                </select>
                <input onChange={handleInputChange} name='eth' className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su direccion ETH' type="text" />
                <input onChange={handleInputChange} name='password' className='p-1.5 rounded bg-gray-600 placeholder:font-light text-white' placeholder='Ingrese su contraseña' type="text" />
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
