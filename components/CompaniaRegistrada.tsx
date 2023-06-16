import { useRouter } from "next/navigation"

const CompaniaRegistrada = () => {
    const router = useRouter()
    return (
        <div className='flex items-center w-full h-full mt-24'>
          <div className='flex px-24 mx-32 h-3/4 w-2/3'>
            <div className='flex flex-col gap-y-8 w-1/2'>
              <span className='text-3xl font-medium'>¡GRACIAS!</span>
              <span className='text-3xl font-medium'>Registro Completado</span>
              <span className="font-light">
                Recibirá un mail confirmando la aprobación de tu cuenta.
              </span>
              <button onClick={() => router.push('/home')} className='text-lg bg-lime-500 rounded py-1.5 bg-opacity-80'>Continuar</button>
            </div>
          </div>
        </div>
    )
}

export default CompaniaRegistrada