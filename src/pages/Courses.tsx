import React from 'react';
import { BookOpen, Users, Clock, Calendar, GraduationCap, CheckCircle, Building2, ArrowRight, Landmark, Video, MessagesSquare, Monitor, Award, BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Courses = () => {
  const courses = [{
    title: 'UPSC Civil Service Course',
    description: 'A complete preparation program designed for the Union Public Service Commission (UPSC) Civil Services Examination.',
    icon: Landmark,
    inclusions: ['Foundation Course', 'Integrated GS (General Studies) Course', 'Mock Tests for Prelims and Mains', 'Daily Answer Writing Practice', 'Interview Guidance Program', 'Mentorship from Former Bureaucrats', 'Optional Subject Coaching'],
    details: {
      mode: 'Offline & Online (Live Classes + Recorded Videos)',
      duration: '12 months',
      startDate: 'July 2025',
      fees: '₹10,000 - ₹30,000 per year',
      note: '(Based on National Screening Test & Personal Interview)'
    }
  }, {
    title: 'State PSC Advanced Program',
    description: 'Tailored for State Public Service Commission (PSC) exams, ensuring focused preparation for state-level administrative roles.',
    icon: Building2,
    inclusions: ['Foundation Course', 'Integrated GS (General Studies) Course', 'State-Specific Syllabus Preparation', 'Mock Tests for Prelims and Mains', 'Daily Answer Writing Practice', 'Interview Guidance Program', 'Mentorship from Former Bureaucrats'],
    details: {
      mode: 'Offline & Online (Live Classes + Recorded Videos)',
      duration: '12 months',
      startDate: 'July 2025',
      fees: '₹10,000 - ₹30,000 per year',
      note: '(Based on National Screening Test & Personal Interview)'
    }
  }, {
    title: 'Comprehensive Course for Government Job Exams',
    description: 'A targeted program for aspirants preparing for various competitive government job exams, including Banking Exams (IBPS, SBI, RBI), Railway Exams (RRB), and Staff Selection Commission (SSC) Exams.',
    icon: BoxIcon,
    inclusions: ['Foundation Course', 'Subject-Specific Coaching for Different Exams', 'Mock Tests and Practice Papers', 'Expert-Led Sessions for Exam Strategy'],
    details: {
      mode: 'Offline & Online (Live Classes + Recorded Videos)',
      duration: '2 months Foundation Course + 8 months full program',
      startDate: 'July 2025',
      fees: 'Maximum ₹10,000 per year',
      note: '(Based on National Screening Test & Personal Interview)'
    }
  }];
  const features = [{
    icon: BookOpen,
    title: 'Comprehensive Study Material',
    description: 'Access to detailed study materials and resources'
  }, {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from experienced educators and former civil servants'
  }, {
    icon: Video,
    title: 'Recorded Sessions',
    description: 'Access to recorded lectures for flexible learning'
  }, {
    icon: MessagesSquare,
    title: 'Doubt Clearing',
    description: 'Regular doubt clearing sessions with faculty'
  }, {
    icon: Monitor,
    title: 'Online Tests',
    description: 'Regular online tests and performance tracking'
  }, {
    icon: Award,
    title: 'Scholarship Support',
    description: 'Merit-based scholarships available'
  }];
  return <main>
      <div className="w-full bg-[#0E79C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-2">Our Courses</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Empowering Aspirants for a Successful Career in Government Services
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-8 w-8 text-brand-blue mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>)}
          </div>
          <div className="space-y-12">
            {courses.map((course, index) => <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <course.icon className="h-8 w-8 text-brand-blue flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h2>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Course Inclusions:
                      </h3>
                      <ul className="space-y-3">
                        {course.inclusions.map((inclusion, idx) => <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            {inclusion}
                          </li>)}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Course Details:
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-5 w-5 text-brand-blue" />
                          <span className="text-gray-600">
                            Mode: {course.details.mode}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-brand-blue" />
                          <span className="text-gray-600">
                            Duration: {course.details.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-brand-blue" />
                          <span className="text-gray-600">
                            Start Date: {course.details.startDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-brand-blue" />
                          <div>
                            <span className="text-gray-600">
                              Fees: {course.details.fees}
                            </span>
                            <p className="text-sm text-gray-500">
                              {course.details.note}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Link to="/scholarship" className="flex-1 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-blue-end transition-colors text-center">
                      Register Now
                    </Link>
                    <Link to="/about-upsc" className="flex-1 border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors text-center">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-16">
            <div className="bg-gradient-to-br from-brand-blue to-gradient-blue-end text-white rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-8 w-8" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">Foundation Course</h2>
                  <p className="text-blue-100">
                    Designed to strengthen your basics with comprehensive
                    coverage of NCERT books, essential for both UPSC and State
                    PSC exams.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Course Inclusions:</h3>
                  <ul className="space-y-3">
                    {['In-depth discussion of NCERT concepts', 'Doubt clearance sessions', 'Answer writing techniques for Mains', 'Regular assessments and MCQ-solving techniques', 'Inclusive study materials provided'].map((item, idx) => <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-yellow-400" />
                        {item}
                      </li>)}
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Course Details:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-5 w-5" />
                      <span>
                        Mode: Offline & Online (Live Classes + Recorded Videos)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>Duration: 2 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>Start Date: July 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Link to="/scholarship" className="flex items-center justify-center gap-2 bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex-1">
                  Register Now <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>;
};