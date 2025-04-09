import React from 'react';
import { Vision } from '../components/Vision';
export const About = () => {
  const mentors = [{
    name: 'SANKETHA REDDY B K',
    designation: 'Academic Director',
    expertise: ['Indian Polity and Governance', 'Economy', 'Ethics Integrity & Aptitude', 'Society and Social Justice', 'International Relation and Internal Security'],
    image: "/SANKETHA.jpeg"
  }, {
    name: 'DHEERAJ YALAMANCHI',
    expertise: ['History, Art and Culture', 'Environment and Ecology', 'Society and Social Justice', 'International Relation'],
    image: "/DHEERAJ.jpeg"
  }, {
    name: 'SUKRUTH M',
    expertise: ['Science & Technology', 'Environment and Ecology'],
    image: "/SUKRUTH.jpeg"
  }, {
    name: 'KRISHNAMURTHY G R',
    expertise: ['History, Art and Culture'],
    image: "/KRISHNAMURTHY.jpeg"
  }, {
    name: 'AKANKSHA',
    expertise: ['Geography'],
    image: "/AKANKSHA.jpeg"
  }, {
    name: 'RASHMI HALLUR',
    expertise: ['Indian Polity'],
    image: "/RASHMI.jpeg"
  }, {
    name: 'SANTHOSH N N',
    expertise: ['Environment & Ecology and Disaster Management', 'CSAT'],
    image: "/SANTHOSH.jpeg"
  }];
  const [academicDirector, ...facultyMembers] = mentors;
  return <main>
      <div className="w-full bg-[#0E79C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">About BSC</h1>
        </div>
      </div>
      <Vision />
      {/* Mentors Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Expert Faculty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img src={mentor.image} alt={mentor.name} className="w-fit h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {mentor.name}
                  </h3>
                  {mentor.designation && <p className="text-brand-blue font-medium text-sm mb-3">
                      {mentor.designation}
                    </p>}
                  <div className="space-y-1">
                    {mentor.expertise.map((item, idx) => <p key={idx} className="text-gray-600 text-sm">
                        • {item}
                      </p>)}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </main>;
};