import "./main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BarShelf from "./components/pages/BarShelf";
import RecipeList from "./components/pages/RecipeList";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/Navbar";
import IndividualRecipe from "./components/pages/IndividualRecipe";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/materialui/theme";
import { ProvideAuth } from "./components/useAuth";
import Sign from "./components/pages/Sign";

function App() {
  return (
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/barshelf" element={<BarShelf />}></Route>
            <Route path="/recipes" element={<RecipeList />}></Route>
            <Route path="/recipes/:id" element={<IndividualRecipe />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/sign" element={<Sign />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default App;
