import {Routes, Route} from "react-router-dom";
import { lazy,Suspense } from "react";
import Loading from "../components/common/Loader";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/AboutUsPage"));
const Employer = lazy(() => import("../pages/Employer"));
const WorkforceSolution = lazy(() => import("../pages/WorkforceSolution"));

const Approuter = () => {
  return (   
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/workforce-solutions" element={<WorkforceSolution />} />
      <Route path="/employer" element={<Employer />} />
    </Routes>
    </Suspense>

  )
}

export default Approuter