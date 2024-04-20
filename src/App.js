import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import List from "./Components/List";
import Cart from "./Components/Cart";
import Form from "./Components/Form";
function App() {
  return (
    <BrowserRouter>
      <div className="border-2 border-stone-400 rounded-2xl md:block sm:inline-block">
        <Menu />
      
      </div>

      <Routes>
        <Route exact path="/" element={<List />} />
        <Route path="/Cart" element={<Cart />} />
        
  
      </Routes>
      <Form />
      <div />
    </BrowserRouter>
  );
}

export default App;
