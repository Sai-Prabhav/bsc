import React from 'react';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Programs = () => {
  return <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Comprehensive Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of courses designed to help you succeed in
            civil services examinations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                UPSC Foundation Course
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive preparation for UPSC Civil Services Examination
                with focus on prelims and mains.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm text-gray-600">10 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm text-gray-600">
                    Batch: June 2025
                  </span>
                </div>
              </div>
              <Link to="/scholarship" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end font-semibold">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                State PSC Advanced Program
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized training for State Civil Services with
                state-specific syllabus coverage.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm text-gray-600">10 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm text-gray-600">
                    Batch: June 2025
                  </span>
                </div>
              </div>
              <Link to="/scholarship" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end font-semibold">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Interview Preparation
              </h3>
              <p className="text-gray-600 mb-4">
                Intensive personality development and interview preparation for
                civil services examination.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm text-gray-600">10 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm text-gray-600">
                    Rolling Admissions
                  </span>
                </div>
              </div>
              <Link to="/scholarship" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end font-semibold">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/scholarship" className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-gradient-blue-end transition-colors">
            Register for Scholarship Exam
          </Link>
        </div>
      </div>
    </div>;
};