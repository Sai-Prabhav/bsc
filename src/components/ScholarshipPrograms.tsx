import React from 'react';
import { BookOpen, Award, Users, Target, MapPin, GraduationCap, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
export const ScholarshipPrograms = () => {
  return <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose BSC IAS Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Achieve Success in Civil Services with Expert Training and
            Real-World Practice
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <GraduationCap className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quality Education</h3>
            <p className="text-gray-600">
              Step into a world where quality civil services education is an
              attainable reality through our comprehensive programs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
            <p className="text-gray-600">
              Benefit from expert faculty guidance and mentorship for a holistic
              learning experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
            <p className="text-gray-600">
              Located in the heart of Bangalore, our center offers convenience
              for those attending in-person classes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Resource Access</h3>
            <p className="text-gray-600">
              Access comprehensive resources and guidance to excel in civil
              services preparation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <ClipboardCheck className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mock Tests</h3>
            <p className="text-gray-600">
              Prepare regularly with our intensive mock tests and practice exams
              designed to boost your confidence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Award className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Scholarship Support</h3>
            <p className="text-gray-600">
              Our scholarship exams pave a path to opportunity, removing
              financial barriers to your dreams.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Available Scholarship Programs
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive scholarship programs are designed to support
              ambitious students in their journey towards civil services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0E79C1]/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-[#0E79C1] mb-4" />
              <h4 className="text-xl font-semibold mb-3">Merit Scholarships</h4>
              <p className="text-gray-600">
                Full tuition coverage for top performers in our scholarship
                examination.
              </p>
            </div>
            <div className="bg-[#0E79C1]/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-[#0E79C1] mb-4" />
              <h4 className="text-xl font-semibold mb-3">
                Special Category Support
              </h4>
              <p className="text-gray-600">
                Dedicated scholarships for parentless children and
                underprivileged students.
              </p>
            </div>
            <div className="bg-[#0E79C1]/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-[#0E79C1] mb-4" />
              <h4 className="text-xl font-semibold mb-3">
                Competitive Exam Support
              </h4>
              <p className="text-gray-600">
                Financial assistance for UPSC, State PSC, and other competitive
                exam preparation.
              </p>
            </div>
          </div>
            <div className="mt-12 text-center">
            <Link
              to="/scholarship"
              className="bg-[#0E79C1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#085890] transition-colors inline-block w-full sm:w-auto"
            >
              Enroll for Scholarship Programs
            </Link>
            </div>
        </div>
      </div>
    </div>;
};