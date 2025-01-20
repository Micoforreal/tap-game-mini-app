import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { GetStarted, HomePage, LeaderBoard, Account, Settings } from "./pages";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
