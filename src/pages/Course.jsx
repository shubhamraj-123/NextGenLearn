import { Card, CardContent } from '@/components/ui/card'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import React from 'react'
import { Badge } from "@/components/ui/badge";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg pt-0 dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 gap-3">
        <div className="relative">
            <img src="https://images.ctfassets.net/aq13lwl6616q/6F802DfBmpgmgUKfFgzeif/74ea9b5d6f987ddd7af36b1dd2094492/nextjs_zero_to_mastery.png" alt="NextJS" className='w-full h-36 object-cover rounded-t-lg'/>
        </div>
        <CardContent className="px-5  space-y-3">
            <h1 className='hover:underline font-bold text-lg truncate cursor-pointer'>Next js Complete Course in Hindi 2025</h1>
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className='font-medium text-sm'>Shubham NextJS</h1>
              </div>
              <Badge className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
                Advanced
              </Badge>
            </div>
            <div className='text-lg font-bold'>
              <span>₹ 499</span>
            </div>
        </CardContent>
    </Card>
  );
};

export default Course;