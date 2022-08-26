import React, { useState } from 'react'
import { data } from '../data/data'

function Food() {
    // console.log(data)
    const [foods, setFoods] = useState(data)

    // FILTER ALL TYPE FOODS
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }


    // FILTER PRICE
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }


    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Food Items</h1>

            {/* FILTER FOOD ROW */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* FILTER TYPE */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap">
                        <button onClick={() => setFoods(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            All
                        </button>
                        <button onClick={() => filterType('appetizer')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            Appetizer
                        </button>
                        <button onClick={() => filterType('main course')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            Main Course
                        </button>
                        <button onClick={() => filterType('dessert')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            Dessert
                        </button>
                        <button onClick={() => filterType('salad')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            Salad
                        </button>
                    </div>
                </div>

                {/* FILTER PRICE */}
                <div>
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button onClick={() => filterPrice('$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            $
                        </button>
                        <button onClick={() => filterPrice('$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            $$
                        </button>
                        <button onClick={() => filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            $$
                        </button>
                        <button onClick={() => filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500">
                            $$$$
                        </button>
                    </div>
                </div>
            </div>

            {/* DISPLAY FOODS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item, index) => (
                    <div key={index} className="border shadow-lg rounded-lg hover:scale-105 hover:bg-black/20 duration-300 cursor-pointer">
                        <img src={item.image} alt={item.name}
                            className="w-full h-[200px] object-cover rounded-t-lg" />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Food