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
import EditCourse from "./pages/admin/course/EditCourse";
import { NextGenLearnCarousel } from "./pages/student/NextGenLearnCarousel";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";
import CourseDetail from "./pages/student/CourseDetail";
import CourseProgress from "./pages/student/CourseProgress";
import SearchPage from "./pages/student/SearchPage";
import { AdminRoute, AutheticatedUser, ProtectedRoute } from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer";
import DynamicCodeBlock from "./pages/DynamicCodeBlock";
import CompanyLogoCarousel from "./pages/CompanyLogoSlider";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
          <NextGenLearnCarousel/>
            <HeroSection />
            <Courses />
            <DynamicCodeBlock/>
            <CompanyLogoCarousel/>
            <Footer/>
          </>
        ),
      },
      {
        path: "login",
        element: (
          <AutheticatedUser><Login/></AutheticatedUser>
        ),
      },
      {
        path: "my-learning",
        element: (
          <ProtectedRoute><MyLearning /></ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute><Profile /></ProtectedRoute>
        ),
      },
      {
        path: "course/search",
        element: (
          <ProtectedRoute><SearchPage/></ProtectedRoute>
        ),
      },
      {
        path: "course-detail/:courseId",
        element: (
          <ProtectedRoute><CourseDetail /></ProtectedRoute> // double security b/c when user logged in goes to http://localhost:5173/course-progress/67e5b369da43ca3446876f26 then they able to go then user will not pay
        ),
      },
      {
        path: "course-progress/:courseId",
        element: (
          <ProtectedRoute>
            <PurchaseCourseProtectedRoute>
              <CourseProgress/>
            </PurchaseCourseProtectedRoute>
          </ProtectedRoute>
        )
      },    

      // admin routes start from here
      {
        path:"admin",
        element:<AdminRoute><Sidebar/></AdminRoute>,
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
          },
          {
            path:"course/:courseId", // dynamic route creating
            element:<EditCourse/>
          },
          {
            path:"course/:courseId/lecture", // dynamic route creating
            element:<CreateLecture/>
          },
          {
            path:"course/:courseId/lecture/:lectureId", 
            element:<EditLecture/>
          }
        ]
      }

    ],
  },
]);

function App() {
  return (
    <main>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}

export default App;