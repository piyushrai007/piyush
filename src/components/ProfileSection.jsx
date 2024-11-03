import React from "react";
import { unammed } from "../assets";

const InfoItem = ({ title, value }) => (
  <div className="flex flex-col py-2">
    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{title}</dt>
    <dd className="text-lg font-semibold">{value}</dd>
  </div>
);

const ProfileSection = () => {
  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="flex flex-col items-center">
        {/* Cover Image */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
        />

        {/* Profile Image and Name */}
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex items-center mt-[-4rem]">
          <img
            src={unammed}
            alt="User Profile"
            className="rounded-md lg:w-[12rem] lg:h-[12rem] outline outline-2 outline-offset-2 outline-blue-500"
          />
          <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
            Piyush Rai
          </h1>
        </div>

        {/* Description */}
        <p className="w-fit text-gray-700 dark:text-gray-400 text-md mx-auto mt-4">
          Backend Developer | Data Science | Machine Learning Engineer passionate about building intelligent systems.
        </p>

        {/* Details Section */}
        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-6 mt-4">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="w-full lg:w-1/2">
              <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <InfoItem title="First Name" value="Piyush" />
                <InfoItem title="Last Name" value="Rai" />
                <InfoItem title="Location" value="Mumbai, India" />
                <InfoItem title="Email" value="piyushraivds45@gmail.com" />
              </dl>
            </div>
            <div className="w-full lg:w-1/2">
              <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <InfoItem title="Phone Number" value="+91 96915*****" />
                <InfoItem title="Website" value={<a href="https://piyush-xi.vercel.app/" className="hover:text-blue-500">https://piyush-xi.vercel.app/</a>} />
                <InfoItem title="Education" value="B.Tech, Data Science (2021-2025), 7.8 CGPA" />
                <InfoItem title="Skills" value="Python, React.js, Django, Flask, NodeJs, ExpressJs, Machine Learning, MongoDB" />
              </dl>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 mt-8">
          <h2 className="text-2xl font-semibold dark:text-white">Projects</h2>
          <ul className="list-disc pl-5 text-gray-800 dark:text-gray-400 space-y-2">
            <li><strong>Agrogya Samabadh:</strong> A heart disease risk prediction system that enables secure doctor-patient collaboration.</li>
            <li><strong>Piyush's Garage:</strong> Django-based car service booking system with machine learning for car price predictions.</li>
            <li><strong>Lexical Insight Engine:</strong> Text analysis tool for extracting insights from URLs using Python.</li>
          </ul>
        </div>

        {/* Achievements Section */}
        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 mt-8">
          <h2 className="text-2xl font-semibold dark:text-white">Achievements</h2>
          <p className="text-gray-800 dark:text-gray-400">5th position in HackHound 2.0, SRM University</p>
        </div>

        {/* Social Links */}
        <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700">
          {/* Add SVG icons for GitHub, LinkedIn, etc., with links */}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
