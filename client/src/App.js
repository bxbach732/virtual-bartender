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
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Footer from './components/pages/Footer';

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
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default App;
