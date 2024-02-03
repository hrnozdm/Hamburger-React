import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificPizza } from '../redux/SpecificPizzaSlice';
import { addtoCart } from '../redux/CartSlice';

const SpecificPizza = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { pizzaDetailData,hasFetched } = useSelector((state) => state.PizzaDetail);

    useEffect(() => {
        if (!hasFetched) {
            dispatch(getSpecificPizza(id));
        }
        
    }, [dispatch, id,hasFetched]);

    //console.log(pizzaDetailData);

    const handleAddToCart=()=>{
        dispatch(addtoCart(pizzaDetailData));
    }
     

    return (
        <div className="container mx-auto my-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center mb-4">
                    <img src={pizzaDetailData?.img} alt={pizzaDetailData?.name} className="w-48 h-48 object-cover rounded-md" />
                </div>
                <div className="text-3xl font-bold mb-2">{pizzaDetailData?.name}</div>
                <div className="text-gray-600 mb-4">{pizzaDetailData?.description}</div>
                <div className="flex items-center mb-4">
                    <div className="mr-4 text-xl">Quantity: {pizzaDetailData?.quantity}</div>
                    <div className="mr-4 text-xl">Price: ${pizzaDetailData?.price}</div>
                </div>
                <button className='bg-red-400 border p-3' onClick={handleAddToCart}>Sepete Ekle</button>
            </div>
        </div>
    );
};

export default SpecificPizza;
