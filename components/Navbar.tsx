import Image from "next/image"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter()
    return (
        <div className='flex items-center justify-between px-4 w-full h-16 z-10 bg-sky-950 bg-opacity-60'>
        {/* // <div className='flex items-center px-4 w-full h-16 z-10'> */}
          <div onClick={() => router.push('/')} className='flex w-fit mx-2 w-full'>
            <Image
              src="/upfc-logo.png"
              alt="UPF Logo"
              className=""
              width={110}
              height={110}
              priority
            />
          </div>
          <div className='flex gap-x-24 mr-4 font-extralight text-lg'>
            <button onClick={() => router.push('/')} className=''>UPFC</button>
            <button className='whitespace-nowrap'>Quienes Somos</button>
            <button className=''>Ingresar</button>
          </div>
        </div>
    )
}

export default Navbar