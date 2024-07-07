import MobileDashboard from "./MobileDashboard";
import img from "../../src/assets/profile.jpg";
import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className=''>
      <Sidebar aria-label="Sidebar with content separator example" className='hidden md:block'>
        <Sidebar.Logo
          href="/"
          img={ img}
          className='w-10 h-10 rounded-full'
          imgAlt="Flowbite logo"
        >
          <p>
            {user?.displayName || "Demo User" }
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              icon={HiChartPie}>
              <p>
                Dashboard
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              <p>
                Upload Book
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/manage"
              icon={HiInbox}
            >
              <p>
                ManageBooks
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
            >
              <p>
                Users
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/user/dashboard/manage"
              icon={HiShoppingBag}
            >
              <p>
                Products
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/login"
              icon={HiArrowSmRight}
            >
              <p>
                Sign In
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/logout"
              icon={HiTable}
            >
              <p>
                Log out
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
            >
              <p>
                Documentation
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiSupport}
            >
              <p>
                Help
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className='md:hidden'>
          <MobileDashboard/>
      </div>
    </div>
  )
}

export default SideBar