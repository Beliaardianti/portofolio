import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="PT EH Corp"
            subTitle="IT staff - (Januari 2024 - November 2024)"
            des="Pengembangan Antarmuka Pengguna: Membangun aplikasi web yang menarik dan fungsional menggunakan HTML, CSS, dan JavaScript, serta framework seperti React, Vue.js, atau Angular. Juga berpengalaman dalam mengintegrasikan Laravel sebagai backend untuk menyediakan data dan fungsionalitas pada antarmuka.
Keterlibatan dalam Desain: Berkolaborasi dengan desainer UI/UX untuk menerjemahkan desain visual menjadi antarmuka pengguna yang dapat digunakan, memastikan pengalaman pengguna yang optimal.
Pengujian dan Debugging: Melakukan pengujian untuk memastikan kualitas dan performa aplikasi, serta mengidentifikasi dan memperbaiki bug untuk meningkatkan pengalaman pengguna."
          />
         
          <ResumeCard
            title="Bootcamp Rakamin Akademy"
            subTitle="Fullstack web developer - (Agustus 2023 - Desember 2023)"
            des="menyelseaikan final project dengan tim dengan sukses"
          />
         
        </div>
      </div>
      <div>

      </div>
    </motion.div>
  );
};

export default Experience;
