import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./component/SignUp.jsx";
import SignIn from "./component/SignIn.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import CopyrightCompliancePolicy from "./pages/Copyright Compliance Policy.jsx";
import TermsConditions from "./pages/Terms & Conditions.jsx";
import PrivacyPolicy from "./pages/Privacy Policy.jsx";
import {Toaster} from "react-hot-toast";
import ColleagueDetails from "./pages/ColleagueDetails.jsx";

function App() {
    return (
        <BrowserRouter>
            <Toaster position='top-center' reverseOrder={false} />
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/sign-up' element={<SignUp/>} />
                <Route exact path='/sign-in' element={<SignIn/>} />
                <Route exact path='/colleague-details/:keyword' element={<ColleagueDetails/>} />
                <Route exact path='/help' element={<HelpPage/>} />
                <Route exact path='/terms' element={<TermsConditions/>} />
                <Route exact path='/privacy-policy' element={<PrivacyPolicy/>} />
                <Route exact path='/copyright' element={<CopyrightCompliancePolicy/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;