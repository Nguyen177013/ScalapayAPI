import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import HomeLayout from "./components/Layout";
import "../public/css/style.css";
import DetailPage, { laptopLoader } from "./pages/DetailPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="laptop/:id"
          element={<DetailPage />}
          loader={laptopLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
