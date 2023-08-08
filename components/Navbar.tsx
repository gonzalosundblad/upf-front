import UpfcLogo from "@/public/UpfcLogo"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { BiMenu, BiX } from 'react-icons/bi'


const Navbar = () => {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <div className='flex items-center justify-between px-4 w-full h-24 z-10'>
          <div onClick={() => router.push('/')} className='flex w-fit mx-6 cursor-pointer w-fit'>
            {/* <Image
              src="/upfc-logo.png"
              alt="UPF Logo"
              className=""
              width={110}
              height={110}
              priority
            /> */}
            <UpfcLogo />
          </div>
          <div className='hidden md:flex gap-x-24 md:mr-12 font-extralight text-lg'>
            <button onClick={() => router.push('/')} className='hover:text-upfc-lime'>UPFC</button>
            <button className='whitespace-nowrap hover:text-upfc-lime'>Quienes Somos</button>
            <button className='hover:text-upfc-lime'>Ingresar</button>
          </div>
          <div className="flex lg:hidden">
            {showMenu ? (
              <BiX
                size={32}
                // className={props.onDark || showMenu ? 'fill-white' : 'fill-black'}
                className={'fill-white'}
              />
            ) : (
              <BiMenu
                size={32}
                // className={props.onDark || showMenu ? 'fill-white' : 'fill-black'}
                className={'fill-white'}
              />
            )}
          </div>
        </div>
    )
}

export default Navbar