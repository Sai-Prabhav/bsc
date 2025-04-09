import React from "react";
export const About = () => {
  return <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About BSC</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Bangalore South Centre (BSC) is a charitable, voluntary social
            organization established in 1991 under the Karnataka Societies
            Registration Act 1960. For over three decades, we have been
            committed to transforming lives through education.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl font-bold text-brand-blue mb-2">1991</h3>
            <p className="text-gray-600">Year Established</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-brand-blue mb-2">20+</h3>
            <p className="text-gray-600">Years of Scholarship Program</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-brand-blue mb-2">1000+</h3>
            <p className="text-gray-600">Students Supported</p>
          </div>
        </div>
      </div>
    </div>;
};