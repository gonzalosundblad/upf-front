'use client'
import Navbar from "@/components/Navbar"

const StartMinting = () => {
    return (
        <div className="flex flex-col items-center justify-between">
        <div className="flex w-full h-screen flex-col items-center justify-between bg-upfc-blue">
            <Navbar />
            <div className='flex flex-col items-center w-full h-full px-24 py-24'>
                <div className="flex flex-col w-1/3">
                    <span className="font-medium mb-2">CARGUE SUS PRODUCTOS DESPLASTIFICADOS</span>
                    <div className='flex flex-col gap-y-8 w-full bg-upfc-gray rounded-lg px-12 py-8 items-center'>
                        <span className="text-gray-800 font-semibold text-lg">BANDEJAS</span>
                        <div className='flex flex-col w-full gap-y-2'>
                            <input className='p-1.5 rounded-lg bg-white bg-opacity-20 placeholder:font-light placeholder:text-gray-100 text-black ' placeholder='Name' type="text" />
                            <button className="bg-white bg-opacity-80 font-normal rounded-lg text-black p-1.5">Change Name</button>
                            <button className="bg-white bg-opacity-80 font-normal rounded-lg text-black p-1.5">Add new unplastified item</button>
                        </div>
                        <div className="flex flex-col w-full items-center">
                            <span className="text-sm">STATUS</span>
                            <div className="w-full p-1.5 h-5 bg-white bg-opacity-20 rounded-full">
                                <div className="w-1/12 h-full bg-upfc-lime rounded-full"></div>
                            </div>
                            <div className="flex text-sm w-full justify-between">
                                <span>Created</span>
                                <span>10%</span>
                            </div>
                        </div>
                        <button onClick={() => null} className='bg-upfc-lime rounded-lg text-black py-1.5 w-full'>Start Minting Request</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default StartMinting