import { Menu, School } from 'lucide-react'
import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import DarkMode from '@/DarkMode';
import { Sheet,SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,} from './ui/sheet';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import { ShoppingCart } from 'lucide-react';






export default function Navbar() {
    const user=true;
  
  return (
    <>
    <div className='h-16 darks:bg-[#0A00A] bg-white  border-b dark:border-b-gray-800 border-b-gray-200  fixed top-0 left-0 right-0 duration-300 z-10'>
       {/* desktop */}
        <div className='max-w-7xl mx-auto hidden  md:flex justify-between items-center gap-9 h-full'>
              <div className='flex items-center gap-2'>  
              <School size={"28"} color='red'/>
              <h1 className='hidden md:block font-extrabold text-2xl'>NextGenLearn</h1>
              </div> 

              <div className='flex items-center gap-6'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>

            
            
 {/* user icon and darkmod */}
              <div className='flex item-center gap-8'>
                {
                  user ?( <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Avatar>
                     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                     <AvatarFallback>CN</AvatarFallback>
                     </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                         My learning
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        Log out
                      </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />

                     
                    
                 
                      <DropdownMenuItem>
                        Dashboard
                      </DropdownMenuItem>
                    
                    </DropdownMenuContent>
                  </DropdownMenu>):
                  (
                    <div className='flex item-center gap-2'>
                        <Button variant='outline'>Login</Button>
                        <Button>signup</Button>
                    </div>
               
                  
                  )}
                  
                <DarkMode/>
                {
                  user ?
                <ShoppingCart />:""
              }
               
              </div>
            
        </div>
        {/* mobiledevice */}
        
        <div className='flex md:hidden items-center justify-between px-4 h-full'>
         <div className='flex items-center justify-between h-full gap-4'>
        <School size={"28"} color='red'/>
        <h1 className=' md:block font-extrabold text-2xl'>E-learning</h1>
        </div> 
        <MobileNavbar/>
        </div>
    </div>



</>
  )
}


const MobileNavbar=()=>{
  const role='instructor';
  return( <Sheet>
    <SheetTrigger asChild>
      <Button size='icon' className='rounded-full bg-gray-200 hover:bg-gray-200' variant="outline"> <Menu/> </Button>
    </SheetTrigger>
    <SheetContent >
      <SheetHeader className='flex flex-row items-center justify-between mt-8'>
        <SheetTitle>NextGenLearn</SheetTitle>
       <DarkMode/>
      </SheetHeader>
     <Separator className='mr-2'/>
      <nav className='flex flex-col space-y-4 ml-2'>
        <span>My Learning</span>
        <span>Edit Profile</span>
        <span>LogOUt</span>
      </nav>
      {
        role ==="instructor" &&(<SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Dashboard</Button>
          </SheetClose>
        </SheetFooter>)
      }
      
    </SheetContent>
  </Sheet>)
} 
