'use client';
import UsuarioRegistrado from '@/components/UsuarioRegistrado';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import UpfcLogoAlt from '@/public/UpfcLogoAlt';

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
  const [categories, setCategories] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('');
        const response = await fetch('https://upfapp.herokuapp.com/users/register/api');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        console.log('ressssp', response)
        const data = await response.json();
        // Handle the response data
        console.log('dataaa',data);
        setCategories(data[0])
      } catch (error) {
        // Handle any errors that occurred during the request

        console.error('nooo', error);
      }
    };

    fetchData();
  }, []);

  const register = async() => {
      const body: any = {
        name: userData.name,
        email: userData.email,
        address: userData.eth,
        category: userData.type,
        password: userData.password,
        suscription: 'on'
      }
      try {
        // const response = await fetch('https://upfapp.herokuapp.com/users/register/api', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(body),
        // })
        // if(!response.ok) {
        //   throw new Error('Request failed');
        // }
        // console.log('responseee', response)
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

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cart bg-[bottom_left_30rem] bg-[length:1100px_1500px]">
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full h-screen flex-col items-center justify-between bg-upfc-blue">
        <Navbar />
        {
            registrado ?
            <UsuarioRegistrado type={userData.type}  />
            :
            <div className='flex items-center w-full h-full'>
          <div className='flex px-24 mx-32 h-3/4 w-1/2'>
            <div className='flex flex-col gap-y-8 w-2/3'>
              <span className='text-3xl font-medium'>REGISTRATE</span>
              <div className='flex flex-col gap-y-3'>
                <input onChange={handleInputChange} name='name' className='p-1.5 rounded bg-upfc-gray placeholder:font-light text-white' placeholder='Ingrese su nombre' type="text" /> 
                <input onChange={handleInputChange} name='email' className='p-1.5 rounded bg-upfc-gray placeholder:font-light text-white' placeholder='Ingrese su email' type="text" />
                <select onChange={handleInputChange} className='p-1.5 rounded bg-upfc-gray placeholder:font-light text-white' name="type" id="">
                  <option value='0'>Tipo de usuario...</option>
                  {
                    categories && categories.length && categories.map((c: any, i: number) => (
                      <option key={c.id} value={c.id}>{c.user_category}</option>
                    ))
                  }
                </select>
                <input onChange={handleInputChange} name='eth' className='p-1.5 rounded bg-upfc-gray placeholder:font-light text-white' placeholder='Ingrese su direccion ETH' type="text" />
                <input onChange={handleInputChange} name='password' className='p-1.5 rounded bg-upfc-gray placeholder:font-light text-white' placeholder='Ingrese su contraseña' type="text" />
                <input className='p-1.5 rounded bg-upfc-gray placeholder:font-light text-white' placeholder='Confirme su contraseña' type="text" />
              </div>
              <button onClick={() => register()} className='bg-upfc-lime text-black rounded py-1.5 bg-opacity-90'>Registrarme</button>
              <div className='text-lg font-thin'>
                <span>¿Ya tenés una cuenta?</span>
                <button onClick={() => router.push('/login')} className='mx-2 text-upfc-lime'>Ingresa</button>
              </div>
            </div>
          </div>
        </div>
        }
        <div className='hidden md:block absolute right-0 bottom-0 top-24 overflow-hidden'>
          <UpfcLogoAlt />
        </div>
      </div>
    </main>
  )
}
