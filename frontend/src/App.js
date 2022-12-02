import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from  "./components/SignUpFormPage";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMePage";
import Footer from "./components/Footer";
import ProductIndexPage from "./components/ProductIndexPage";
import ProductShowPage from "./components/ProductShowPage";

import './App.css'



function App() {
  return (
    
    <>
    <Navbar />
    <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about-me">
        <AboutMe/>
      </Route>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      <Route path="/signup">
        <SignupFormPage/>
      </Route>

      <Route path="/shoes">
        <ProductIndexPage />
      </Route>

      <Route path="/products/:productId">
        <ProductShowPage />
      </Route>

      <Route path="/users/:id">
        <ProfilePage/>
      </Route>

    </Switch>
    <Footer/>

    </>
  );
}

export default App;
