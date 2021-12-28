import ShowUsers from "./Components/ShowUsers";
import { Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
};
export default App;
