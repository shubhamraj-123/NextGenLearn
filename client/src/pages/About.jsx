import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 dark:text-white">
        About Us
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6 text-justify max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            About <span className="text-blue-600">NextGenLearn</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to{" "}
            <span className="text-indigo-400 font-semibold">NextGenLearn</span>{" "}
            – your next-generation learning platform designed to empower
            students, professionals, and lifelong learners.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our mission is to make high-quality, personalized education
            accessible to everyone, everywhere. Built on the robust MERN stack,
            NextGenLearn delivers smooth performance and a secure, scalable
            learning experience.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Whether you're an instructor wanting to share knowledge, or a
            learner looking to grow, we provide the tools to connect,
            collaborate, and thrive in a modern education ecosystem.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="student-going-to-school.svg"
            alt="NextGenLearn"
            className="w-full h-auto max-w-md dark:invert"
          />
        </div>
      </section>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <Card className="bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              To be the leading platform where learning never stops, and
              innovation in education thrives.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              To offer intuitive, scalable, and interactive learning
              environments using cutting-edge technologies.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Our Tech
            </h3>
            <p className="dark:text-gray-300 text-justify">
              Built with MongoDB, Express.js, React, and Node.js, enhanced with
              Tailwind CSS and shadcn/ui for a seamless experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;