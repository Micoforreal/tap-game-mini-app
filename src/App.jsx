import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { GetStarted } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="get-started" element={<GetStarted />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
