import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { GetStarted } from "./pages";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
