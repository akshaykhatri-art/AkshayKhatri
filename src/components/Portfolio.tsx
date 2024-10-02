"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.jpg";
import jobNest from "../assets/JobNest.png";
import smartCityRating from "../assets/SmartCityRating.png";

const projects = [
  {
    title: "JobNest",
    desc: "JobNest, an innovative MERN application, transforms job tracking and career management. Seamlessly organize applications, interviews, and follow-ups to enhance your job search efficiency.",
    devStack: "MongoDB, Express, React, Node.js",
    link: "https://akshay-jobnestv2.onrender.com/",
    git: "https://github.com/akshaykhatri-art/JobNest",
    src: jobNest,
  },
  {
    title: "Smart City Rating",
    desc: "Smart city Rating is a web application that allows you to view cities with a description and pictures. Once you login or signup, you can leave a review and rate different aspects of any city you choose. You can add your own city if it's not already listed, along with the city name, state name, image, and short description. Explore the beautiful smart world through our website",
    devStack: "MongoDB, Express, Node.js, Bootstarp, Cloudinary",
    link: "https://smart-city-rating.onrender.com/",
    git: "https://github.com/akshaykhatri-art/smart-city-rating",
    src: smartCityRating,
  },
  //   {
  //     title: "Project 333",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, neque soluta fugiat, adipisci voluptatem accusamus quibusdam pariatur facilis, labore sunt earum odio hic dignissimos fugit rerum alias dolore at!",
  //     devStack: "MongoDB, Express, React, Node.js",
  //     link: "#",
  //     git: "#",
  //     src: proj4,
  //   },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-12 flex ${
                index % 2 === 1
                  ? "flex-col-reverse md:flex-row-reverse gap-12"
                  : "flex-col md:flex-row"
              }`}
            >
              <div className="space-y-2 max-w-[550px]">
                <h2 className="text-7xl my-4 text-white/70">{`0${
                  index + 1
                }`}</h2>
                <h2 className="text-4xl">{project.title}</h2>
                <p className="text-lg text-white/70 break-words p-4">
                  {project.desc}
                </p>
                <p className="text-xl text-orange-400 font-semibold">
                  {project.devStack}
                </p>
                <div className="w-64 h-[1px] bg-gray-400 my-4">
                  <a href={project.link} className="mr-6">
                    Link
                  </a>
                  <a href={project.git}>Git</a>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  src={project.src}
                  alt={project.title}
                  className="h-[350] w-[500px] object-cover border rounded border-gray-700"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
