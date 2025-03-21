import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes,  } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Login from '@/pages/Login'
import MainLayout from './Layout/MainLayout';
import MyLearning from './pages/student/MyLearning';
import Profile from './pages/student/Profile';

// const appRouter =  createBrowserRouter([
//   {
//     path:"/",
//     element:<MainLayout/>,
//     children:[
//       {
//         path:"/",
//         element:(
//         <>
//           {/* <HeroSection/> */}
//           {/* Course */}
//         </>
//         ),
//       },
//       {
//         path:"login",
//         element:<Login/>
//       }
//     ],
//   },
// ]);

function App() {
  return (
    <main>
      {/* <Login/> */}
      {/* <RouterProvider router={appRouter}/> */}
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<MainLayout/>}/>,
         <Route path="/login" element={<Login/>}/>,
         <Route path="/my-learning" element={<MyLearning/>}/>,
         <Route path="/profile" element={<Profile/>}/>,
        </Routes>     
      </BrowserRouter>
    </main>
  )
}

export default App
