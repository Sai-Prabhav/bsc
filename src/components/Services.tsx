import React from "react";
import { GraduationCap, Target } from "lucide-react";
export const Services = () => {
  return <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <GraduationCap className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Educational Scholarships
            </h3>
            <p className="text-gray-600">
              Supporting underprivileged students, especially parentless
              children, with financial assistance for their education for over
              two decades.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <Target className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Career Guidance & IAS Academy
            </h3>
            <p className="text-gray-600">
              Comprehensive training programs for UPSC, State PSCs, Banking
              Sector, Indian Railways, and other competitive examinations.
            </p>
          </div>
        </div>
      </div>
    </div>;
};