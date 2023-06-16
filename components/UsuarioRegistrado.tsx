import { useRouter } from "next/navigation"

const UsuarioRegistrado = () => {
    const router = useRouter()
    return (
        <div className='flex items-center w-full h-full mt-24'>
          <div className='flex px-24 mx-32 h-3/4 w-2/3'>
            <div className='flex flex-col gap-y-8 w-1/2'>
              <span className='text-3xl font-medium'>¡GRACIAS POR REGISTRARTE!</span>
              <span className="font-light">
                YA ESTÁS MÁS CERCA DE TU CERTIFICACIÓN.
                AHORA TENÉS QUE COMPLETAR EL REGISTRO DE TU EMPRESA
              </span>
              <button onClick={() => router.push('/registro/company')} className='text-lg bg-lime-500 rounded py-1.5 bg-opacity-80'>Completar registro</button>
            </div>
          </div>
        </div>
    )
}

export default UsuarioRegistrado