import { MultiLevelSidebar } from "../components/SideBar"
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/constants";

import Dashboard from '../pages/DashboardPage'
import UserProfile from "../pages/UserPage";
import ExpensePage from "../pages/ExpensePage";


const Dashborad = ()=>{
    return(
        <>
        <div className="flex">
        <MultiLevelSidebar />
        <div className="flex-1 p-4">
          {/* Main content area */}
          <h1 className="text-2xl">Welcome to the Dashboard</h1>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.PROFILE} element={<UserProfile />} />
            <Route path={ROUTES.EXPENSES} element={<ExpensePage />} />
          </Routes>
        </div>
      </div>
        </>
    )
} 

export default Dashborad;