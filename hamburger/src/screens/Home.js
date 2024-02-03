import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/Categories';

const Home = () => {
  const dispatch = useDispatch();
  const { CategoryData,hasFetched} = useSelector((state) => state.Categories); 

  useEffect(() => {
    if (!hasFetched) {
      dispatch(getCategories());
    }
    
  }, [dispatch,hasFetched]);

  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {CategoryData.map((item, i) => (
          <div  onClick={()=>window.location=`/specific/${item?.id}`} key={i} className='bg-white rounded-lg shadow-md p-4 cursor-pointer'>
            <img src={item?.img} alt="" className='w-80 h-80 object-cover mb-4' />
            <div className='text-xl font-bold mb-2'>{item?.name}</div>
            <div className='text-gray-600 mb-2'>{item?.description}</div>
            <div className='text-green-600 font-bold'>${item?.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
