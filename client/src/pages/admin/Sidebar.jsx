// import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="flex">
//       <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 dark:bg-[#130b1e] bg-[#f0f0f0] p-5 sticky top-0 h-screen">
//         <div className="mt-20 space-y-4">
//           <Link to="dashboard" className="flex items-center gap-2">
//             <ChartNoAxesColumn size={22} />
//             <h1>Dashboard</h1>
//           </Link>
//           <Link to="course" className="flex items-center gap-2">
//             <SquareLibrary size={22} />
//             <h1>Courses</h1>
//           </Link>
//         </div>
//       </div>
//       <div className="flex-1 md:p-24 p-2 ">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { ChartNoAxesColumn, SquareLibrary, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const Sidebar = () => {
//   return (
//     <div className="flex">

//       {/* Mobile Hamburger Menu */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="outline" size="icon">
//               <Menu className="h-6 w-6" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[250px] sm:w-[300px] p-5 space-y-6 dark:bg-[#130b1e] bg-[#f0f0f0]">
//             <div className="mt-10 space-y-4">
//               <Link to="dashboard" className="flex items-center gap-2">
//                 <ChartNoAxesColumn size={22} />
//                 <h1>Dashboard</h1>
//               </Link>
//               <Link to="course" className="flex items-center gap-2">
//                 <SquareLibrary size={22} />
//                 <h1>Courses</h1>
//               </Link>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Desktop Sidebar */}
//       <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 dark:bg-[#130b1e] bg-[#f0f0f0] p-5 sticky top-0 h-screen">
//         <div className="mt-20 space-y-4">
//           <Link to="dashboard" className="flex items-center gap-2">
//             <ChartNoAxesColumn size={22} />
//             <h1>Dashboard</h1>
//           </Link>
//           <Link to="course" className="flex items-center gap-2">
//             <SquareLibrary size={22} />
//             <h1>Courses</h1>
//           </Link>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 md:p-24 p-2">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ChartNoAxesColumn, SquareLibrary, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = () => {
  return (
    <div className="min-h-screen">

      {/* Fixed Sidebar on Desktop */}
      <div className="hidden lg:block fixed top-18 left-0 w-[250px] sm:w-[300px] h-screen p-5 space-y-8 border-r border-gray-300 dark:border-gray-700 dark:bg-[#130b1e] bg-[#f0f0f0]">
        <div className="mt-20 space-y-4">
          <Link to="dashboard" className="flex items-center gap-2">
            <ChartNoAxesColumn size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link to="course" className="flex items-center gap-2">
            <SquareLibrary size={22} />
            <h1>Courses</h1>
          </Link>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="lg:ml-[250px] sm:lg:ml-[300px]">

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden p-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px] p-5 space-y-6 dark:bg-[#130b1e] bg-[#f0f0f0] top-20">
              <div className="mt-10 space-y-4">
                <Link to="dashboard" className="flex items-center gap-2">
                  <ChartNoAxesColumn size={22} />
                  <h1>Dashboard</h1>
                </Link>
                <Link to="course" className="flex items-center gap-2">
                  <SquareLibrary size={22} />
                  <h1>Courses</h1>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Page Content */}
        <div className="md:p-24 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
