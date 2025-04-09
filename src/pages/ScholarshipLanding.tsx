import React from 'react';
import { Clock, Calendar, BookOpen, Award, CheckCircle, CheckCircle2, Users, GraduationCap, BookOpenCheck, Target, Video, Library, Computer, MessageSquare, ClipboardCheck } from 'lucide-react';
export const ScholarshipLanding = () => {
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
  const testimonials = [{
    name: 'Rahul Sharma',
    achievement: 'AIR 45, UPSC CSE 2023',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&q=80',
    review: 'The mentorship and guidance provided by BSC Academy were instrumental in my success. The personalized attention and regular mock tests helped me improve significantly.'
  }, {
    name: 'Priya Singh',
    achievement: 'AIR 128, UPSC CSE 2023',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&q=80',
    review: "BSC Academy's structured approach and expert faculty made my UPSC journey much smoother. The scholarship program made quality education accessible."
  }, {
    name: 'Arun Kumar',
    achievement: 'AIR 256, UPSC CSE 2023',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&q=80',
    review: 'The comprehensive study material and regular mindset sessions helped me stay focused throughout my preparation. Thank you BSC Academy!'
  }];
  return <main>
      {/* Hero Section */}
      <div className="relative w-fit bg-gradient-to-br from-[#0E79C1] to-[#085890] text-white overflow-hidden py-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] bg-[#0E79C1]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-[100rem] h-[100rem] bg-[#0E79C1]/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Don't spend BIG Money on UPSC Coaching
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Avail up to 100% Scholarship on Fees!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="/Motivation.jpg" alt="Motivation Session by IRS Officer" className="w-full h-48 object-cover rounded-lg" />
                <img src="/Teachers_Day_Celebrations_5.jpg" alt="BSC IAS Academy Students and Faculty" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Register for All India Scholarship Entrance Exam
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input type="text" id="fullName" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID *
                  </label>
                  <input type="email" id="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number *
                  </label>
                  <input type="tel" id="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                    Highest Education Qualification *
                  </label>
                  <input type="text" id="education" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <button type="submit" className="w-full bg-[#0E79C1] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#085890] transition-colors">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* About BSC Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <img src="/thumbnail_logo.png" alt="BSC Logo" className="h-20 w-20" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                BSC Career Guidance and IAS Academy
              </h2>
              <div className="space-y-4 max-w-4xl">
                <p className="text-gray-600 text-lg">
                  We are BSC Career Guidance and IAS Academy, A dream innovation
                  of the, Bangalore South Center a Non Profit Organisation based
                  out of Bangalore.
                </p>
                <p className="text-gray-600 text-lg">
                  We believe Success is a Mindset Game. With right Planning,
                  Consistency, and Commitment you can fulfil your UPSC
                  ambitions.
                </p>
                <p className="text-gray-600 text-lg">
                  We provide Expert guidance and mentorship to crack UPSC exams
                  on 1 to 1 basis. The good news is, you can be one of those who
                  don't have to pay a single rupee for this coaching based on
                  the Scholarship Merit Score.
                </p>
                <p className="text-brand-blue font-semibold text-lg">
                  Yes, we only charge for Study Materials and Mock Tests. (It
                  all boils down to the cost of a burger every day)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Get Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            WHAT YOU GET FROM THE COURSE
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[{
            icon: BookOpenCheck,
            text: 'Integrated coaching for Prelims + Mains for UPSC'
          }, {
            icon: Target,
            text: 'Roadmap to cracking UPSC'
          }, {
            icon: Users,
            text: '1 to 1 Mentorship and guidance'
          }, {
            icon: GraduationCap,
            text: 'Expert Guidance to crack competitive exams like UPSC, KAS, BANKING, RBI, RAILWAY, SSC etc.'
          }, {
            icon: Users,
            text: 'Coaching by UPSC experienced faculty'
          }, {
            icon: ClipboardCheck,
            text: 'Regular Mock tests with analysis'
          }, {
            icon: BookOpen,
            text: 'Study materials prepared by experts'
          }, {
            icon: MessageSquare,
            text: 'Mindset talks by experts'
          }, {
            icon: Users,
            text: 'Tips on decoding UPSC interview by experts'
          }, {
            icon: Video,
            text: 'High quality videos - you can refer any time, anywhere'
          }, {
            icon: BookOpen,
            text: 'State of the art classrooms'
          }, {
            icon: Library,
            text: 'Access to Library equipped with relevant books, newspapers and magazines'
          }, {
            icon: BookOpen,
            text: 'Reading room facility'
          }, {
            icon: Computer,
            text: 'Access to Computer Room with internet connection'
          }].map((item, index) => <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <item.icon className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">{item.text}</p>
              </div>)}
          </div>
        </div>
      </div>

      {/* Mentors Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Expert Faculty
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Testimonials Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <img src="/manasa.jpeg" alt="Student portrait" className="w-48 h-48 object-cover rounded-full" />
                    <div className="mt-4">
                      <h3 className="font-semibold text-xl text-gray-900">
                        SAI MANASA
                      </h3>
                      <p className="text-red-600 font-medium">
                        AIR 48 (2020-21 Batch)
                      </p>
                      <p className="text-brand-blue">IFS (Working in Japan)</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-600 space-y-4">
                      <p>
                        "The interview guidance program was a game-changer for
                        me! Despite having a solid grasp of the syllabus, I
                        always felt a bit uncertain about presenting myself
                        confidently in the interview. The personalized feedback,
                        mock interviews, and insightful tips provided by the BSC
                        IAS Academy helped me refine my responses and develop a
                        composed and confident demeanor."
                      </p>
                      <p>
                        "The detailed analysis of BSC IAS Academy after every
                        mock session highlighted my strengths and areas for
                        improvement, which allowed me to fine-tune my answers
                        and approach. The panelists' questions were
                        thought-provoking and closely resembled the real
                        interview scenario, which gave me an edge during the
                        final round."
                      </p>
                      <p>
                        "I am thrilled to share that I cleared the IAS exam, and
                        I owe a huge part of my success to the rigorous training
                        and support I received from this program. For anyone
                        preparing for the UPSC interview, this program is a
                        must!"
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <img src="/vyas.jpeg" alt="Student portrait" className="w-48 h-48 object-cover rounded-full" />
                    <div className="mt-4">
                      <h3 className="font-semibold text-xl text-gray-900">
                        VAISHAK BAGEE
                      </h3>
                      <p className="text-red-600 font-medium">
                        AIR 744 (2020-21 Batch)
                      </p>
                      <p className="text-brand-blue">IPS</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-600 space-y-4">
                      <p>
                        "I am thrilled to share that I have successfully cleared
                        the IAS exam, and I owe a significant part of my success
                        to the Mock Test Series and Interview Guidance Program I
                        enrolled in BSC IAS Academy. The mock tests provided a
                        real-time exam environment, helping me develop time
                        management skills and fine-tune my answer writing. The
                        detailed feedback I received after each test highlighted
                        my weak areas and guided me on how to improve."
                      </p>
                      <p>
                        "The Interview Guidance Program of BSC IAS Academy was
                        equally transformative. The personalized mock
                        interviews, along with the panel's insightful feedback,
                        boosted my confidence and helped me articulate my
                        thoughts clearly. I walked into the actual interview
                        well-prepared and composed, thanks to the practical tips
                        and strategies provided during the sessions."
                      </p>
                      <p>
                        "This journey wouldn't have been the same without the
                        expert mentorship and structured approach these programs
                        offered. I highly recommend this to any serious aspirant
                        aiming for the civil services!"
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <img src="/uma.jpeg" alt="Student portrait" className="w-48 h-48 object-cover rounded-full" />
                    <div className="mt-4">
                      <h3 className="font-semibold text-xl text-gray-900">
                        UMA MUGUNDANAVAR
                      </h3>
                      <p className="text-red-600 font-medium">
                        Successful Candidate
                      </p>
                      <p className="text-brand-blue">SDC, Belgavi DC Office</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-600 space-y-4">
                      <p>
                        "Joining BSC IAS Academy was the best decision of my
                        life. Although I initially enrolled to prepare for the
                        IAS exam, the guidance and mentorship I received helped
                        me excel beyond just that. The faculty's in-depth
                        knowledge, personalized approach, and continuous
                        motivation equipped me with the skills and confidence to
                        clear other competitive exams as well."
                      </p>
                      <p>
                        "The structured study materials, mock tests, and
                        interview preparation sessions made me better prepared
                        for any challenge. Thanks to BSC IAS Academy, I not only
                        gained knowledge but also developed a mindset to tackle
                        any exam successfully. I highly recommend this institute
                        to anyone aiming for a bright future in the civil
                        services and beyond."
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0E79C1] to-[#085890] rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Stand a chance to Avail up to 100% scholarship
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Exam Date and Time</h3>
                      <p className="text-blue-100">29-June-2025, 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Duration</h3>
                      <p className="text-blue-100">2 Hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BookOpen className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Syllabus</h3>
                      <p className="text-blue-100">
                        Class 6th - 12th NCERT Books and current affairs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Pattern</h3>
                      <p className="text-blue-100">
                        Objective(MCQs) and Essay type
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Eligibility</h3>
                      <ul className="text-blue-100 space-y-2">
                        <li>Final year degree and above students</li>
                        <li>Age as per UPSC notification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-gray-900 font-semibold mb-6">
                  Register for FREE Scholarship Exam
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input type="text" id="fullName" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email ID *
                    </label>
                    <input type="email" id="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number *
                    </label>
                    <input type="tel" id="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Education Qualification *
                    </label>
                    <input type="text" id="education" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <button type="submit" className="w-full bg-[#0E79C1] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#085890] transition-colors">
                    Register Now
                  </button>
                  <p className="text-center text-[#0E79C1] font-medium text-sm">
                    Limited Seats Available. Hurry!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>;
};