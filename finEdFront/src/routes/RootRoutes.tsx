import { Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import HomeScreen from "../Modules/HomeScreen/HomeScreen";
import LoginScreen from "../Modules/LoginScreen/LoginScreen";
import { history } from "../utils/utils";



const RootRoutes =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    history.location = location;
    history.navigate = navigate;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='*' element={<div>404 Page Not Found</div>}/>
                {/* <Route path={PUBLIC_ROUTES.BASE_PATH} element={<BaseRoute/>}/> */}
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
            </Routes>
        </Suspense>
    )

}

export default RootRoutes;