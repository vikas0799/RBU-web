import React from "react";

const Card = (props) => {
    let clothsdata=props.clothsdata;
  console.log(clothsdata);
  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {clothsdata.map((item) => (
                <div
                    key={item.id}
                    className="border rounded-xl shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition-shadow"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-40 h-40 object-contain mb-4 rounded-lg bg-gray-50"
                    />
                    <h2 className="text-lg font-semibold text-center mb-2 text-gray-800">
                        {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2 text-center">
                        {item.description}
                    </p>
                    <p className="font-bold text-blue-700 mb-2">${item.price}</p>
                    <p className="text-sm text-gray-500 mb-2">
                        <span className="text-yellow-500">⭐</span> {item.rating.rate} ({item.rating.count})
                    </p>
                    <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Card;
