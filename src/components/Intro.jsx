import React from "react";

export const Intro = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-indigo-200 py-16 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-extrabold text-5xl sm:text-6xl text-indigo-400 mb-8">
          Welcome, Students!
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-8">
        Your go-to platform for <strong> semester notes</strong>, study materials, and more!
        </p>
        
      
        <a
          href="https://drive.google.com/drive/folders/1IMh4elb-RYv5M8GpQrJaVQZLZyI2w4uY"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
        >
          Submit Your Notes
        </a>
        
       
      </div>
    </section>
  );
};
