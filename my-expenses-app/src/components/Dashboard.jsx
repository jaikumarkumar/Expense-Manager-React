import { MultiLevelSidebar } from "../components/SideBar"
import ExpensePage from "../pages/ExpensePage";

const Dashborad = ()=>{
    return(
        <>
        <div className="flex">
        <MultiLevelSidebar />
        <div className="flex-1 p-4">
          {/* Main content area */}
          <h1 className="text-2xl">Welcome to the Dashboard</h1>
          <ExpensePage />
        </div>
      </div>
        </>
    )
} 

export default Dashborad;