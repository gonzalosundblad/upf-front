'use client';
import Navbar from '@/components/Navbar';
import UpfcLogoAlt from '@/public/UpfcLogoAlt';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Login() {
  const router = useRouter()
  const [loginError, setLoginError] = useState<boolean>(false)
  const [userData, setUserData] = useState<any>({
    email: '',
    password: ''
  })

  const execLogin = async() => {
    const body: any = {
      email: userData.email,
      password: userData.password,
    }
    try {
      const response = await fetch('https://upfapp.herokuapp.com/users/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      })
      if(!response.ok) {
        throw new Error('Request failed');
      }
      console.log('ressssp', response)
      const data = await response.json();
      // Handle the response data
      console.log('dataaa',data);
      if(response.status === 200 && response.statusText === 'OK') {
        // const setCookieHeader: any = response.headers.get('Set-Cookie');
        // console.log('cookie',  setCookieHeader)
        // Store the 'Set-Cookie' value in a cookie on the client-side
        // Cookies.set('upfc_session', setCookieHeader, { expires: 7, secure: true, sameSite: 'strict' });

        // guardar en un react context o en local storage q la sesion esta iniciada
        router.push('/home/' + data.user.userCategory)
      } else {
        setLoginError(true)
      }
      // Handle the response data
      // setRegistrado(true)
    } catch(err) {
        setLoginError(true)
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
        <div className='flex items-center w-full h-full px-12 md:px-0'>
          <div className='flex md:p-24 md:mx-32 h-3/4 w-full md:w-1/2'>
            <div className='flex flex-col gap-y-8 w-full md:w-2/3'>
              <span className='text-3xl'>INGRESÁ</span>
              <div className='relative flex flex-col gap-y-3'>
                <input onChange={handleInputChange} name='email' className='p-1.5 rounded bg-upfc-gray placeholder:font-light placeholder:text-base tracking-wider text-white' placeholder='Ingrese su email' type="text" />
                <input onChange={handleInputChange} name='password' className='p-1.5 rounded bg-upfc-gray placeholder:font-light placeholder:text-base tracking-wider text-white' placeholder='Ingrese su contraseña' type="text" />
                {
                    loginError && 
                    <span className='absolute -bottom-5 text-xs text-red-500'>User or password are incorrect</span>
                }
              </div>
              <button className='bg-upfc-lime rounded py-1.5 text-black' onClick={() => execLogin()}>Ingresar</button>
              <div className='flex flex-col md:flex-row items-center md:items-start font-thin text-lg'>
                <span>¿Todavía no tenés una cuenta?</span>
                <button onClick={() => router.push('/registro')} className='md:mx-2 text-upfc-lime'>Registrate</button>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block absolute right-0 bottom-0 top-24 overflow-hidden'>
          <UpfcLogoAlt />
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