import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Wifi, ClipboardCheck } from 'lucide-react';
export const Hero = () => {
  return <div className="relative w-full bg-gradient-to-br from-[#0E79C1] to-[#085890] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] bg-[#0E79C1]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[100rem] h-[100rem] bg-[#0E79C1]/20 rounded-full blur-3xl"></div>
      </div>
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Transform Your{' '}
              <span className="relative">
                <span className="relative z-10">Aspirations</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/30 -rotate-2"></span>
              </span>{' '}
              into Achievements
            </h1>
            <p className="text-lg text-red-100 leading-relaxed mb-6">
              Step into a world where quality civil services education is an
              attainable reality. Our scholarship exams pave a path to
              opportunity, removing financial barriers to your dreams.
            </p>
            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-white" />
                <div>
                  <h3 className="font-medium text-sm">Exam Date</h3>
                  <p className="text-red-100 text-sm">29-June-2025</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                <Clock className="h-5 w-5 text-white" />
                <div>
                  <h3 className="font-medium text-sm">Duration</h3>
                  <p className="text-red-100 text-sm">2 Hours</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                <Wifi className="h-5 w-5 text-white" />
                <div>
                  <h3 className="font-medium text-sm">Exam Mode</h3>
                  <p className="text-red-100 text-sm">Online</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-white" />
                <div>
                  <h3 className="font-medium text-sm">Pattern</h3>
                  <p className="text-red-100 text-sm">MCQ & Essay</p>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/scholarship" className="group bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 text-center">
                <span className="flex items-center justify-center">
                  Register for Scholarship Exam
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link to="/courses" className="group border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105 text-center">
                <span className="flex items-center justify-center">
                  View Training Programs
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/Motivation.jpg" alt="Motivation Speech" className="w-full aspect-[4/3] object-cover rounded-lg" />
            <img src="/Teachers_Day_Celebrations_2.jpg" alt="Teachers Day Celebrations" className="w-full aspect-[4/3] object-cover rounded-lg translate-y-4" />
            <img src="/Teachers_Day_Celebrations_3.jpg" alt="Teachers Day Event" className="w-full aspect-[4/3] object-cover rounded-lg -translate-y-4" />
            <img src="/Teachers_Day_Celebrations_5.jpg" alt="BSC IAS Academy Group Photo" className="w-full aspect-[4/3] object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>;
};