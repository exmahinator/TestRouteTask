import { Routes, Route } from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import List from 'pages/List';
import Element from 'components/Element';

const OurRoutes = () => {
  return (
    // <>
    //   <Routes>
    //     <Route path="/" element={<Auth />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/list" element={<List />}>
    //       <Route path=":elementId" element={<Element />} />
    //     </Route>
    //   </Routes>
    // </>
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/element" element={<Element />} />
      </Routes>
    </>
  );
};

export default OurRoutes;
