import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminNavbar from "./Components/AdminComponent/AdminDashboard/AdminNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/AdminComponent/AdminDashboard/Home";
import Course from "./Components/AdminComponent/AdminDashboard/Course";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminNavbar />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
