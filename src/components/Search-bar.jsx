import { useState } from 'react'
import { useNavigate } from 'react-router'
import './searchbar.css' 
export const SearchBar = () => {
   const [searchInput, setSearchInput] = useState("")

   const navigate = useNavigate()

   const handleEnter = (e) => {
       if (searchInput){
           e.key == 'Enter' ? navigate(`/search?q=${searchInput}`) : console.log('');
       }
   }

    return (
        <div className="container">
            <img src = "https://tse3.mm.bing.net/th?id=OIP.OKq-BhPE8XlFzuQDJ6w2fgHaCe&pid=Api&P=0&w=502&h=167"/>
            <div className="SearchDiv">
                <input
                   onChange={(e) => setSearchInput(e.target.value)} className = "search-box" onKeyDown={handleEnter} placeholder="Search here"/>
            </div>
        </div>
       )
}