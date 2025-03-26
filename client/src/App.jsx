// import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes,  } from 'react-router-dom'
// import './App.css'
// import { Button } from './components/ui/button'
// import Login from '@/pages/Login'
// import MainLayout from './Layout/MainLayout';
// import MyLearning from './pages/student/MyLearning';
// import Profile from './pages/student/Profile';


// function App() {
//   return (
//     <main>
//       {/* <Login/> */}
//       {/* <RouterProvider router={appRouter}/> */}
//       <BrowserRouter>
//         <Routes>
//          <Route path="/" element={<MainLayout/>}/>,
//          <Route path="/login" element={<Login/>}/>,
//          <Route path="/my-learning" element={<MyLearning/>}/>,
//          <Route path="/profile" element={<Profile/>}/>,
//         </Routes>     
//       </BrowserRouter>
//     </main>
//   )
// }

// export default App


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <Login/>
        ),
      },
      {
        path: "my-learning",
        element: (
          <MyLearning />
        ),
      },
      {
        path: "profile",
        element: (
          <Profile />
        ),
      }, 

      // admin routes start from here
      {
        path:"admin",
        element:<Sidebar/>,
        children:[
          {
            path:"dashboard",
            element:<Dashboard/>
          },
          {
            path:"course",
            element:<CourseTable/>
          },
          {
            path:"course/create",
            element:<AddCourse/>
          }
        ]
      }

    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;