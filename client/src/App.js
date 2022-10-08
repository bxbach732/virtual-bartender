import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BarShelf from "./components/BarShelf";
import RecipeList from "./components/RecipeList";
import About from "./components/About";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/barshelf" element={<BarShelf />}></Route>
        <Route path="/recipes" element={<RecipeList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
