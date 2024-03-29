import { useRouter } from "next/navigation"

const UsuarioRegistrado = (props: { type: string }) => {
    const router = useRouter()
    return (
        <div className='flex items-center w-full h-full mt-24'>
          {
            props.type == '2' ?
            <div className='flex px-24 mx-32 h-3/4 w-2/3'>
              <div className='flex flex-col gap-y-8 w-1/2'>
                <span className='text-4xl font-medium'>¡GRACIAS POR REGISTRARTE!</span>
                <span className="font-thin">
                  YA ESTÁS MÁS CERCA DE TU CERTIFICACIÓN.
                  AHORA TENÉS QUE COMPLETAR EL REGISTRO DE TU EMPRESA
                </span>
                <button onClick={() => router.push('/registro/company')} className='text-lg text-black bg-upfc-lime rounded py-1.5 bg-opacity-80'>Completar registro</button>
              </div>
            </div>
            :
            <div className='flex px-24 mx-32 h-3/4 w-2/3'>
              <div className='flex flex-col gap-y-8 w-1/2'>
                <span className='text-3xl font-medium'>¡GRACIAS POR REGISTRARTE!</span>
                <span className="font-light">
                  recibiras un email cuando puedas iniciar sesion
                </span>
                {/* <button onClick={() => router.push('/login')} className='text-lg text-black bg-upfc-lime rounded py-1.5 bg-opacity-90'>Iniciar Sesion</button> */}
              </div>
            </div>
          }
        </div>
    )
}

export default UsuarioRegistrado