import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";
import { searchResult } from "../redux/action";

export const Navbar = ({input}) => {
    const [search,setSearch] = useState(input)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = () => {
        getResultData();
        navigate(`/search?q=${search}`)
    }

    const getResultData = () =>{
        console.log(search)
        axios.get(`http://localhost:3001/data?q=${search}`)
        .then((res) => {
            console.log(res.data)
            dispatch(searchResult(res.data))
        })
        .catch((err) =>{
            //error
        })
    }
    return (
        <div id = "navbar">
            <img src="https://tse1.mm.bing.net/th?id=OIP.Lt9DsnRzQ9dyF33_TeZ8oQHaDj&pid=Api&P=0&w=376&h=180"/>
            <input type = 'text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="search" onClick={onSubmit}>Search</button>
        </div>
    )
}