import { BrowserRouter, Route, Routes, } from "react-router-dom";
import PleaseSignIn from "./components/auth/PleaseSignIn";
import Container from "./components/Container";
import PrivateRoute from "./components/auth/PrivateRoute";

const Body = () => {
    return (
        <div className="bg-[#E6F6F9]">
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<PleaseSignIn />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/form" element={<Container />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Body