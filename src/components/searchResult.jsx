import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchResult, filterExplicit, sortAlphabet, sortDate, sortQuality } from "../redux/action.js";
import { Navbar } from "./navbar";

export const SearchResultData = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");
  const data = useSelector((store) => store.result);
  const dispatch = useDispatch();

  useEffect(() => {
    getResult();
  }, []);

  const getResult = () => {
    axios
      .get(`http://localhost:3001/data?q=${query}`)
      .then((res) => {
        // console.log(res);
        const a = res.data
        dispatch(searchResult(a));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSortAlpha = () =>{
    dispatch(sortAlphabet());
  }

  const handleSortDate = () =>{
    dispatch(sortDate());
  }

  const handleSortQuality =()=>{
    dispatch(sortQuality());
  }

  const handleFilterExplicit = () =>{
    dispatch(filterExplicit());
  }
  return (
    <div id="searchpage">
      <Navbar input={query} />
      <div id="filter-sort">
        <button id="sort-alphabetically" onClick={handleSortAlpha}>Sort Alpha</button>
        <button id="sort-by-date" onClick={handleSortDate}>Sort by Date</button>
        <button id="sort-by-quality" onClick={handleSortQuality}>Sort by quality</button>
        <button id="filter-explicit" onClick={handleFilterExplicit}>Filter Explicit</button>
      </div>
      <div id="search-result">
      {data.map((el,i) => {
        return <div className="result" key={i}>
              <Link className="title" to={`/page/${el.id}`}>{el.title}</Link>
              <p className="author">{el.author}</p>
              <p>Creation Date: </p>
              <p className="creation-date">{el.creation_date}</p>
              <p>Explicit: </p>
              <p className="explicit">{el.expilcit? "true" : "false"}</p>
              <p>Quality %: </p>
              <p className="quality">{el.quality}</p>
          </div>
      })}
      </div>
      
    </div>
  );
};