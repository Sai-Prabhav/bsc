import React from 'react';
import { BookOpen, Video, Library, ClipboardCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
export const LearningHub = () => {
  return <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learning Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access a wealth of curated resources to enhance your civil services
            preparation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-blue-start/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Video className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Video Lectures</h3>
            <p className="text-gray-600 mb-4">
              Expert-led video lectures covering UPSC syllabus and current
              affairs
            </p>
            <span className="text-sm text-brand-blue">120+ Videos</span>
          </div>
          <div className="bg-gradient-blue-start/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <ClipboardCheck className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mock Tests</h3>
            <p className="text-gray-600 mb-4">
              Regular mock tests with detailed analysis and performance tracking
            </p>
            <span className="text-sm text-brand-blue">50+ Mock Tests</span>
          </div>
          <div className="bg-gradient-blue-start/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Clock className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Previous Test Series</h3>
            <p className="text-gray-600 mb-4">
              Access to previous years' test papers with detailed solutions
            </p>
            <span className="text-sm text-brand-blue">10+ Year Series</span>
          </div>
          <div className="bg-gradient-blue-start/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Books</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive collection of books and references for all subjects
            </p>
            <span className="text-sm text-brand-blue">200+ Books</span>
          </div>
          <div className="bg-gradient-blue-start/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 text-brand-blue mb-4">
              <Library className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Downloads</h3>
            <p className="text-gray-600 mb-4">
              Access to downloadable study materials and resources
            </p>
            <span className="text-sm text-brand-blue">50+ Resources</span>
          </div>
          <div className="bg-gradient-blue-start/5 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Library className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Initiatives</h3>
            <p className="text-gray-600 mb-4">
              Special challenges and programs to boost your preparation
            </p>
            <span className="text-sm text-brand-blue">10+ Challenges</span>
          </div>
        </div>
        <div className="text-center">
          <Link to="/learning-hub" className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-gradient-blue-end transition-colors">
            Explore Learning Hub
          </Link>
        </div>
      </div>
    </div>;
};