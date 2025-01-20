import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  GetStarted,
  HomePage,
  LeaderBoard,
  Account,
  Settings,
  Gang,
  Casino,
  Earn,
} from "./pages";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gang" element={<Gang />} />
          <Route path="casino" element={<Casino />} />
          <Route path="earn" element={<Earn />} />
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
