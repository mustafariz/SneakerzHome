import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from  "./components/SignUpFormPage";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMePage";
import Footer from "./components/Footer";
import './App.css'



function App() {
  return (
    
    <>
    
     
     
     <Navbar />
     <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      <Route path="/signup">
        <SignupFormPage/>
      </Route>

       <Route path="/users/:id">
        <ProfilePage/>
      </Route>

      <Route path="/about-me">
        <AboutMe/>
      </Route>



    </Switch>
    <Footer/>

    </>
  );
}

export default App;
