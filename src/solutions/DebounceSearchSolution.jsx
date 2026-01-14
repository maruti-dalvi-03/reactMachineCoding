import React, { useEffect, useState } from 'react'

const DebounceSearchSolution = () => {
    const items = [
        "Apple", "Banana", "Cherry", "Date", "Elderberry",
        "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
        "Mango", "Nectarine", "Orange", "Papaya", "Quince",
        "Raspberry", "Strawberry", "Tangerine", "Watermelon"
    ];

    const [search, setSearch] = useState('');
    const [debouncedSearch, setDeboucedSearch] = useState(search);

   
    useEffect(() => {
        const timer = setTimeout(() => {
            setDeboucedSearch(search);
        }, 500)

        return () => clearTimeout(timer);
    }, [search])

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

  return (
    <div>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} 
        placeholder="Search..." className='px-2 py-1'/>

        <ul className='mt-3'>List of results for "{search}"
            {filteredItems.map(item => ( <li key={item}>{item}</li> ))}
            
        </ul>
    </div>
  )
}

export default DebounceSearchSolution
