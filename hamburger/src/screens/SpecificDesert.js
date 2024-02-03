import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificDesert } from '../redux/SpecificDessertSlice';
import { addtoCart } from '../redux/CartSlice';

const SpecificDesert= () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { DessertDetail,hasFetched } = useSelector((state) => state.SpecificDesert);

    useEffect(() => {
        if (!hasFetched) {
            dispatch(getSpecificDesert(id));
        }
        
    }, [dispatch, id,hasFetched]);

    console.log(DessertDetail);

    const handleAddToCart=()=>{
        dispatch(addtoCart(DessertDetail));
    }
     

    return (
        <div className="container mx-auto my-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center mb-4">
                    <img src={DessertDetail?.img} alt={DessertDetail?.name} className="w-48 h-48 object-cover rounded-md" />
                </div>
                <div className="text-3xl font-bold mb-2">{DessertDetail?.name}</div>
                <div className="text-gray-600 mb-4">{DessertDetail?.description}</div>
                <div className="flex items-center mb-4">
                    <div className="mr-4 text-xl">Quantity: {DessertDetail?.quantity}</div>
                    <div className="mr-4 text-xl">Price: ${DessertDetail?.price}</div>
                </div>
                <button className='bg-red-400 border p-3' onClick={handleAddToCart}>Sepete Ekle</button>
            </div>
        </div>
    );
};

export default SpecificDesert;
