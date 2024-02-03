import React,{useState} from 'react';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const handleSearch=()=>{
    window.location=`/search/${search}`
  }
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold text-white">Pizza King</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="text-white hover:text-gray-300 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-gray-300 cursor-pointer" onClick={()=>window.location=`/`}>Ana Sayfa</li>
          <li className="text-white hover:text-gray-300 cursor-pointer" onClick={()=>window.location=`/desert`}>Desert</li>
          <li className="text-white hover:text-gray-300 cursor-pointer" onClick={()=>window.location=`/cart`}>Sepet</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
