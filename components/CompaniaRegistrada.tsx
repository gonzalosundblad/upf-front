import { useRouter } from "next/navigation"

const CompaniaRegistrada = () => {
    const router = useRouter()
    return (
        <div className='flex items-center w-full h-full mt-24'>
          <div className='flex px-24 mx-32 h-3/4 w-2/3'>
            <div className='flex flex-col gap-y-8 w-1/2'>
              <span className='text-4xl font-medium'>¡GRACIAS POR REGISTRARTE!</span>
              <span className="font-thin">
                RECIBIRAS UN MAIL CONFIRMANDO LA APROBACION DE TU CUENTA
              </span>
              {/* <button onClick={() => router.push('/login')} className='text-lg text-black bg-upfc-lime rounded py-1.5 bg-opacity-90'>Iniciar sesion</button> */}
            </div>
          </div>
        </div>
    )
}

export default CompaniaRegistrada