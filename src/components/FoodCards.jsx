import React from 'react'

function FoodCards() {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Cards Food 1*/}
            <div className="rounded-xl relative">
                {/* OVERLAYS */}
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Trough 7/24</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
            </div>
            {/* Cards Food 2*/}
            <div className="rounded-xl relative">
                {/* OVERLAYS */}
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Trough 7/24</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            {/* Cards Food 3*/}
            <div className="rounded-xl relative">
                {/* OVERLAYS */}
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Trough 7/24</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/11912788/pexels-photo-11912788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
    )
}

export default FoodCards