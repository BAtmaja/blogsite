// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import AddpostPage from "../views/Blog/addpost";
import AdminBlogManage from '../views/Blog/admin-blog-control/adminBlog';




const DashboardRoutes = [
  {
    path: "/Dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/addblog",
    sidebarName: "Add Blog",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: AddpostPage
  },
  {
    path: "/adminblog",
    sidebarName: "Blog Manger",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: AdminBlogManage
  },

  { redirect: true, path: "/", to: "/Dashboard", navbarName: "Redirect" }
];

export default DashboardRoutes;
