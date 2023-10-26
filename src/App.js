
import Main from './components/Main';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';
import About from './components/About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;