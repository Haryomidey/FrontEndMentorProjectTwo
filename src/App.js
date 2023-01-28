import Sidebar from "./components/Sidebar";
import { Routes, Route } from 'react-router-dom';
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import FinishUp from "./components/FinishUp";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path = '/' element = {<YourInfo />} />
        <Route path ='your-info' element = {<YourInfo />} />
        <Route path ='select-plan' element = {<SelectPlan />} />
        <Route path ='add-ons' element = {<AddOns />} />
        <Route path='finish-up' element={<FinishUp />} />
        <Route path="summary" element = {<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
