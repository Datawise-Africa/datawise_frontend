import { useState } from "react";
import Section from "../../components/HomePage/Section";
import BlogsDashboard from "./BlogsDashbord";
import UsersDashboard from "./UsersDashboard";
import DataDashboard from "./DataDashboard";

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Blogs');

  const renderSelectedComponent = () => {
    switch (selectedMenuItem) {
      case 'Blogs':
        return <BlogsDashboard />
      case 'Data':
        return <DataDashboard />
      case 'Users':
        return <UsersDashboard />
      default:
        return null;
    }
  }

  return (
    <Section id="dashboard">
      <div className="mt-20 mb-5 md:mt-0 flex justify-center items-center md:flex-row">
        <button className={`block relative font-code text-2xl transition-colors hover:text-color-1 px-4 py-4 md:py-6 text-n-14 ${selectedMenuItem === 'Blogs' ? 'z-2 text-n-15' : 'text-n-14'}`} onClick={() => setSelectedMenuItem('Blogs')}>Blogs</button>
        <button className={`block relative font-code text-2xl transition-colors hover:text-color-1 px-4 py-4 md:py-6 text-n-14 ${selectedMenuItem === 'Data' ? 'z-2 text-n-15' : 'text-n-14'}`} onClick={() => setSelectedMenuItem('Data')}>Data</button>
        <button className={`block relative font-code text-2xl transition-colors hover:text-color-1 px-4 py-4 md:py-6 text-n-14 ${selectedMenuItem === 'Users' ? 'z-2 text-n-15' : 'text-n-14'}`} onClick={() => setSelectedMenuItem('Users')}>Users</button>
      </div>
      {renderSelectedComponent()}
    </Section>
  )
}

export default Dashboard;