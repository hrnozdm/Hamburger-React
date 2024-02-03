// SearchResults.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/Categories';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const {searchTerm} = useParams();
  const dispatch = useDispatch();
  const { CategoryData, DesertData, hasFetched } = useSelector((state) => ({
    CategoryData: state.Categories.CategoryData,
    DesertData: state.Desert.DesertData,
    hasFetched: state.Categories.hasFetched && state.Desert.hasFetched,
  }));

  useEffect(() => {
    if (!hasFetched) {
      dispatch(getCategories());
    }
  }, [dispatch, hasFetched]);

  const allItems = [...CategoryData, ...DesertData];

  const searchResults = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  console.log(searchResults);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
            <img src={item?.img} alt="" className="w-80 h-80 object-cover mb-4" />
            <div className="text-xl font-bold mb-2">{item?.name}</div>
            <div className="text-gray-600 mb-2">{item?.description}</div>
            <div className="text-green-600 font-bold">${item?.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
