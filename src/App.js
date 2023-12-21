import "./App.css";
import NotFound from "./Components/NotFound";
import Root from "./Components/Root";
import Create from "./Pages/Create";
import Home from "./Pages/Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
<Route path="*" element={<NotFound />} />
      
    </Route>
  )
);

function App() {
  return (
   
      
      <RouterProvider router={router} />
    
  );
}
export default App;
