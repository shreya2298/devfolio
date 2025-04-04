"use client";

import React, { useEffect } from 'react';
import { Sparkle } from "./ui/Sparkle";
import Script from 'next/script';

const Certifications = () => {
  useEffect(() => {
    // Load the Credly script after component mounts
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="certifications" className="sm:py-20 w-full">
      <h3 className="title">
        Professional{' '}
        <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
          certifications.
        </span>
      </h3>

      <div className="w-full mt-12">
        <Sparkle duration={Math.floor(Math.random() * 10000) + 10000}>
          <div className="p-3 md:p-5 lg:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="e285fff3-814c-4188-9033-f1c2d4c651be" 
                data-share-badge-host="https://www.credly.com"
              />
              <div className="text-start flex-1">
                <h3 className="text-justify text-lg lg:text-3xl font-extrabold">AWS Certified Developer - Associate</h3>
                <p className="text-xl md:text-2xl font-bold mt-3">
                  <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
                    Amazon Web Services
                  </span>
                </p>
                <p className="my-5 text-white/80">Validated expertise in designing distributed systems on AWS, implementing security controls, and optimizing cloud solutions for performance and cost.</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['AWS', 'AWS Lambda', 'Security', 'Scalability', 'Cost Optimization', 'Elastic Beanstalk', 'ECS','VPC','CloudWatch','S3','Route 53'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-white/10 text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition duration-200 ease-in-out"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Sparkle>
      </div>
    </section>
  );
};

export default Certifications; 