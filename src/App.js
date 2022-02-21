import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/Search-bar';
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './components/mainPage';
import { SearchResultData } from './components/searchResult';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchBar />}/>
        <Route path='/page/:id' element={<MainPage />}/>
        <Route path='/search' element={<SearchResultData/>}/>
      </Routes>
    </div>
  );
}

export default App;
