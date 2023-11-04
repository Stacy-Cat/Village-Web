//RoutePaths.jsx

import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import MainNav from "./MainNav";
import SignIn from "./SignIn";
import Register from "./Register";
import SiteMap from "./SiteMap";
import Contact from "./Contact";
import NotFound from "./NotFound";

const RoutePaths = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/MainNav" element={<MainNav />} />
        <Route path="/MainNav/:id" element={<MainNav />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignIn/:id" element={<SignIn />} />
        <Route path="/SiteMap" element={<SiteMap />} />
        <Route path="/SiteMap/:id" element={<SiteMap />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact/:id" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutePaths;
