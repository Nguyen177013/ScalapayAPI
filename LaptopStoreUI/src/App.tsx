import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import HomeLayout from "./components/Layout";
import "../public/css/style.css"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomeLayout/>}>
            <Route index element = {<HomePage/>}/>
          </Route>
          <Route path="*" element ={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
