import React from 'react';
import { Clock, Calendar, IndianRupee } from 'lucide-react';
export const Programs = () => {
  const programs = [{
    title: 'UPSC Foundation Course',
    description: 'Comprehensive preparation for UPSC Civil Services Examination with focus on prelims and mains.',
    duration: '12 Months',
    batch: 'June 2024',
    fee: '₹1,25,000',
    features: ['Complete syllabus coverage', 'Daily answer writing practice', 'Monthly tests', 'Personal mentoring', 'Study materials included']
  }, {
    title: 'State PSC Advanced Program',
    description: 'Specialized training for State Civil Services with state-specific syllabus coverage.',
    duration: '8 Months',
    batch: 'Aug 2024',
    fee: '₹85,000',
    features: ['State-specific curriculum', 'Weekly mock tests', 'Current affairs sessions', 'Expert faculty guidance', 'Online resources access']
  }, {
    title: 'Interview Preparation',
    description: 'Intensive personality development and interview preparation for civil services examination.',
    duration: '3 Months',
    batch: 'Rolling Admissions',
    fee: '₹45,000',
    features: ['Mock interviews', 'Personality development', 'Group discussions', 'Current affairs analysis', 'Individual feedback sessions']
  }, {
    title: 'Prelims Test Series',
    description: 'Comprehensive test series focusing on UPSC Prelims preparation with detailed analysis.',
    duration: '4 Months',
    batch: 'Flexible',
    fee: '₹15,000',
    features: ['20 full-length tests', 'Detailed solutions', 'Performance analytics', 'Topic-wise assessment', 'Discussion sessions']
  }];
  return <main>
      <div className="w-full bg-[#0E79C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-2">
            Training Programs
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to help you
            succeed in civil services examinations
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-brand-blue" />
                      <span className="text-gray-600">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-brand-blue" />
                      <span className="text-gray-600">{program.batch}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-5 w-5 text-brand-blue" />
                      <span className="text-gray-600">{program.fee}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-brand-blue rounded-full"></span>
                        {feature}
                      </li>)}
                  </ul>
                  <button className="mt-8 w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-blue-end transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </main>;
};