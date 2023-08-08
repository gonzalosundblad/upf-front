'use client';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CompaniaRegistrada from '@/components/CompaniaRegistrada';
import UpfcLogoAlt from '@/public/UpfcLogoAlt';

export default function CompanyRegistry() {
  const router = useRouter()
  const [registrado, setRegistrado] = useState<boolean>(false)
  const [companyData, setCompanyData] = useState<any>({
    cuit: '',
    country: '',
    city: '',
    employees: '',
    invoicing: '',
    category: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('');
        // const response = await fetch('https://upfapp.herokuapp.com/api/enterprise/home');
        // if (!response.ok) {
        //   throw new Error('Request failed');
        // }
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
  }, []);

  const registerCompany = async() => {
    const body: any = {
      name: companyData.name,
      email: companyData.email,
      address: companyData.eth,
      category: companyData.type,
      password: companyData.password,
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
  setCompanyData({
    ...companyData, // spread existing state
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
            <CompaniaRegistrada />
            :
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <span className='text-4xl mb-2 font-medium'>SUBMIT YOUR COMPANY'S DETAILS</span>
            <span className='text-sm font-thin'>TODO LISTO PARA APLICAR POR TU CERTIFICACION UPFC</span>
            <div className='flex px-24 items-center justify-center mt-10 py-12 w-[40%] bg-upfc-gray rounded-lg'>
              <div className='flex flex-col gap-y-8 w-full'>
                <div className='flex flex-col gap-y-3'>
                  <input 
                    name='cuit'
                    onChange={handleInputChange}
                    className='p-1.5 rounded bg-white bg-opacity-20 placeholder:font-light text-white' 
                    placeholder='CUIT' 
                    type="text" 
                  /> 
                  <input 
                    name='country'
                    onChange={handleInputChange}
                    className='p-1.5 rounded bg-white bg-opacity-20 placeholder:font-light text-white' 
                    placeholder='Country' 
                    type="text" 
                  /> 
                  <input 
                    name='city'
                    onChange={handleInputChange}
                    className='p-1.5 rounded bg-white bg-opacity-20 placeholder:font-light text-white' 
                    placeholder='City' 
                    type="text" 
                  />
                  <input 
                    name='employees'
                    onChange={handleInputChange}
                    className='p-1.5 rounded bg-white bg-opacity-20 placeholder:font-light text-white' 
                    placeholder='Numbers of Employees'
                     type="text" 
                    />
                  <input 
                    name='invoicing'
                    onChange={handleInputChange}
                    className='p-1.5 rounded bg-white bg-opacity-20 placeholder:font-light text-white' 
                    placeholder='Anual Invoicing'
                     type="text" 
                    />
                  <input 
                    name='category'
                    onChange={handleInputChange}
                    className='p-1.5 rounded bg-white bg-opacity-20 placeholder:font-light text-white' 
                    placeholder='Mipyme Category'
                    type="text" 
                  />
                </div>
                <button onClick={() => registerCompany()} className='bg-upfc-lime text-black rounded py-1.5 bg-opacity-90'>Submit</button>
              </div>
            </div>
        </div>
        }
        {/* <div className='hidden md:block absolute right-0 bottom-0 top-24 overflow-hidden'>
          <UpfcLogoAlt />
        </div> */}
      </div>
    </main>
  )
}
