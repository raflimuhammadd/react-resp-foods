import React from 'react'

function Hero() {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[500px] relative">
                {/* OVERLAYS */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px]
                bg-black/70 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">The <span className="text-orange-500">BEST</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold"><span className="text-orange-500">Foods</span> Order</h1>
                </div>
                <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
    )
}

export default Hero