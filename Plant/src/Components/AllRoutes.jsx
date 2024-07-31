import {Routes,Route} from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage"
import DescriptionPage from "../Pages/DescriptionPage";
import AboutPage from "../Pages/AboutPage";
import ContactUs from "../Pages/ContactUsPage";
import Signup from "../Pages/SignupPage";
const AllRoutes=()=>{
    return(
    <>
    <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/description/:treeId" element={<DescriptionPage />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
    )
}
export default AllRoutes;