import React, { memo } from 'react';
import { Calendar, Users, GraduationCap, Flag, ClipboardCheck, BookOpen } from 'lucide-react';
export const AboutUPSC = () => {
  const examsList = ['Indian Administrative Service', 'Indian Foreign Service', 'Indian Police Service', "Indian Audit and Accounts Service, Group 'A'", "Indian Civil Accounts Service, Group 'A'", "Indian Corporate Law Service, Group 'A'", "Indian Defence Accounts Service, Group 'A'", "Indian Defence Estates Service, Group 'A'", "Indian Information Service, Group 'A'", "Indian Postal Service, Group 'A'", "Indian P&T Accounts and Finance Service, Group 'A'", "Indian Railway Protection Force Service, Group 'A'", "Indian Revenue Service (Customs & Indirect Taxes) Group 'A'", "Indian Revenue Service (Income Tax) Group 'A'", "Indian Trade Service, Group 'A' (Grade III)", "Indian Railway Management Service, Group 'A'", "Armed Forces Headquarters Civil Service, Group 'B' (Section Officer's Grade)", "Delhi, Andaman and Nicobar Islands, Lakshadweep, Daman & Diu and Dadra & Nagar Haveli Civil Service (DANICS), Group 'B'", "Delhi, Andaman and Nicobar Islands, Lakshadweep, Daman & Diu and Dadra & Nagar Haveli Police Service (DANIPS), Group 'B'", "Pondicherry Civil Service (PONDICS), Group 'B'", "Pondicherry Police Service (PONDIPS), Group 'B'"];
  const examCalendar = [{
    event: 'UPSC 2025 exam notification',
    date: '22nd January 2025'
  }, {
    event: 'UPSC 2025 exam application form',
    date: '22nd January 2025 to 11th February 2025'
  }, {
    event: 'UPSC 2025 admit card',
    date: 'Last week of April 2025 or first week of May 2025 (Tentatively)'
  }, {
    event: 'UPSC 2025 Civil Services Prelims exam',
    date: '25th May 2025 (Sunday) -1 Day',
    subtext: 'Indian Forest Service (Preliminary) Examination, 2025'
  }, {
    event: 'UPSC 2025 Civil Services Mains exam',
    date: '22nd August 2025 (Friday) -5 Days'
  }, {
    event: 'Indian Forest Service (Main) Examination, 2025',
    date: '16th November 2025-7 days'
  }];
  return <main>
      <div className="w-full bg-[#0E79C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">About UPSC</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Understanding the Union Public Service Commission and its
            Examinations
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-600 mb-8">
              Union Public Service Commission (UPSC) is the prestigious and
              major exam conducting Constitutional authority for recruiting
              candidates for various positions in the Indian Government. It also
              conducts the CSE (Civil Services Examination), which is majorly
              known as the IAS/IPS examination. This exam is conducted in 2
              phases, such as, UPSC Prelims and Mains [Written and Personality
              Test]. In this process, the preliminary examination will be
              objective-type while the mains exam will be descriptive in nature.
              It also includes the essay-writing too.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Examinations conducted by UPSC
            </h2>
            <p className="text-gray-600 mb-6">
              To understand the UPSC concept, the candidate needs to know the
              list of the examination conducted by the UPSC:
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <ol className="list-decimal space-y-3 text-gray-600">
                {examsList.map((exam, index) => <li key={index} className="ml-4">
                    {exam}
                  </li>)}
              </ol>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-brand-blue" />
              UPSC 2025 Exam Calendar
            </h2>
            <div className="space-y-6">
              {examCalendar.map((item, index) => <div key={index} className="border-l-4 border-brand-blue pl-4 py-2">
                  <h3 className="font-semibold text-gray-900">{item.event}</h3>
                  <p className="text-brand-blue">{item.date}</p>
                  {item.subtext && <p className="text-sm text-gray-600 mt-1">{item.subtext}</p>}
                </div>)}
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="h-6 w-6 mr-2 text-brand-blue" />
              UPSC Eligibility Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-brand-blue" />
                  <h3 className="font-semibold text-gray-900">
                    Basic Requirements
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>Age Limit: 21 to 32 years</li>
                  <li>
                    Educational Qualification: Graduation from any recognized
                    university
                  </li>
                  <li>Nationality: Indian</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Flag className="h-5 w-5 text-brand-blue" />
                  <h3 className="font-semibold text-gray-900">
                    Number of Attempts
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    General Category & OBC (Creamy layer): 6 attempts up to age
                    32
                  </li>
                  <li>SC/ST Candidates: No restriction till age 37</li>
                  <li>OBC Non-creamy layer: 9 attempts up to age 35</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <ClipboardCheck className="h-6 w-6 mr-2 text-brand-blue" />
              UPSC Plan of Examination
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Preliminary Examination
                </h3>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <p className="text-gray-600">
                    The Civil Services (Preliminary) Examination will consist of
                    two papers of Objective type (multiple choice questions) and
                    carry a maximum of 400 marks in the subjects set out in
                    sub-section (A) of Section II. This examination is meant to
                    serve as a screening test only; the marks obtained in the
                    Civil Services (Preliminary) Examination by the candidates
                    who are declared qualified for admission to the Civil
                    Services (Main) Examination will not be counted for
                    determining their final order of merit.
                  </p>
                  <p className="text-gray-600">
                    The number of candidates to be admitted to the Civil
                    Services (Main) Examination will be about twelve to thirteen
                    times the total approximate number of vacancies to be filled
                    in the year through this Examination. Only those candidates
                    who are declared by the Commission to have qualified in the
                    Civil Services (Preliminary) Examination in the year will be
                    eligible for admission to the Civil Services (Main)
                    Examination of that year provided they are otherwise
                    eligible for admission to the Civil Services (Main)
                    Examination.
                  </p>
                  <div className="bg-brand-blue/5 rounded-lg p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Important Notes:
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600">
                          <span className="font-medium">Note I:</span> The
                          Commission will draw a list of candidates to be
                          qualified for Civil Services (Main) Examination based
                          on the criterion of minimum qualifying marks of 33% in
                          General Studies Paper-II of Civil Services
                          (Preliminary) Examination and total qualifying marks
                          of General Studies Paper-I of Civil Services
                          (Preliminary) Examination as may be determined by the
                          Commission.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <span className="font-medium">Note II:</span> There
                          will be negative marking for incorrect answers as
                          detailed below:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                          <li>
                            There are four alternatives for the answers to every
                            question. For each question for which a wrong answer
                            has been given by the candidate, one-third (0.33) of
                            the marks assigned to that question will be deducted
                            as penalty.
                          </li>
                          <li>
                            If a candidate gives more than one answer, it will
                            be treated as a wrong answer even if one of the
                            given answers happen to be correct and there will be
                            same penalty as above for that question.
                          </li>
                          <li>
                            If a question is left blank i.e. no answer is given
                            by the candidate, there will be no penalty for that
                            question.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <ClipboardCheck className="h-6 w-6 mr-2 text-brand-blue" />
              Preliminary Examination Details
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Name of the Paper
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                      No of Questions
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                      Marks Allotted
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                      Time Allotted
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Nature of Exam
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Paper I: General Studies (Objective-type)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      100
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      200
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      2 hours
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      The score will be considered for Cut-off
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Paper-II: General Studies-II (CSAT) (Objective-Type)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      80
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      200
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                      2 hours
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Qualifying Nature- Candidates will have to score 33% to
                      qualify CSAT
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <ClipboardCheck className="h-6 w-6 mr-2 text-brand-blue" />
              Main Examination
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <ol className="list-decimal space-y-4 text-gray-600 ml-4">
                  <li>
                    The Civil Services (Main) Examination will consist of a
                    Written Examination and an Interview/Personality Test. The
                    Written Examination will consist of 9 papers of conventional
                    essay type, out of which two papers will be of qualifying in
                    nature. Marks obtained for all the compulsory papers
                    (Paper-I to Paper-VII) and Marks obtained in
                    Interview/Personality Test will be counted for ranking.
                  </li>
                  <li>
                    Candidates who obtain such minimum qualifying marks in the
                    written part of the Civil Services (Main) Examination as may
                    be fixed by the Commission at their discretion, shall be
                    summoned by them for an Interview/Personality Test, vide
                    sub-section (C) of Section-II. The number of candidates to
                    be summoned for Interview/Personality Test will be about
                    twice of the number of vacancies to be filled. The
                    Interview/Personality Test will carry 275 marks (with no
                    minimum qualifying marks).
                  </li>
                  <li>
                    Marks thus obtained by the candidates in the Civil Services
                    (Main) Examination (Written part as well as
                    Interview/Personality Test) would determine their final
                    ranking. Candidates will be allotted to the various Services
                    keeping in view their ranks in the examination and the
                    preferences expressed by them for the various Services and
                    posts.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <ClipboardCheck className="h-6 w-6 mr-2 text-brand-blue" />
              Main Examination Papers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Paper
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Subject
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      Total marks
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      Nature of paper
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      Type of Paper
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[{
                  paper: 'Paper A',
                  subject: 'Compulsory Indian language',
                  duration: '3 hours',
                  marks: '300',
                  nature: 'Qualifying',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper B',
                  subject: 'English',
                  duration: '3 hours',
                  marks: '300',
                  nature: 'Qualifying',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper I',
                  subject: 'Essay',
                  duration: '3 hours',
                  marks: '250',
                  nature: 'Merit',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper-II',
                  subject: 'General Studies I',
                  duration: '3 hours',
                  marks: '250',
                  nature: 'Merit',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper III',
                  subject: 'General Studies II',
                  duration: '3 hours',
                  marks: '250',
                  nature: 'Merit',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper IV',
                  subject: 'General Studies III',
                  duration: '3 hours',
                  marks: '250',
                  nature: 'Merit',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper V',
                  subject: 'General Studies IV',
                  duration: '3 hours',
                  marks: '250',
                  nature: 'Merit',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper VI',
                  subject: 'Optional I',
                  duration: '3 hours',
                  marks: '250',
                  nature: 'Merit',
                  type: 'Descriptive'
                }, {
                  paper: 'Paper VII',
                  subject: 'Optional II',
                  duration: '3 hours',
                  marks: '250',
                  nature: 'Merit',
                  type: 'Descriptive'
                }].map((row, index) => <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {row.paper}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {row.subject}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 text-center">
                        {row.duration}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 text-center">
                        {row.marks}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 text-center">
                        {row.nature}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 text-center">
                        {row.type}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-brand-blue" />
              Syllabi for the Examination
            </h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Part A—Preliminary Examination
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Paper I - (200 marks) Duration: Two hours
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Current events of national and international importance.
                  </li>
                  <li>History of India and Indian National Movement.</li>
                  <li>
                    Indian and World Geography-Physical, Social, Economic
                    Geography of India and the World.
                  </li>
                  <li>
                    Indian Polity and Governance-Constitution, Political System,
                    Panchayati Raj, Public Policy, Rights Issues, etc.
                  </li>
                  <li>
                    Economic and Social Development-Sustainable Development,
                    Poverty, Inclusion, Demographics, Social Sector Initiatives,
                    etc.
                  </li>
                  <li>
                    General issues on Environmental ecology, Bio-diversity and
                    Climate Change - that do not require subject specialization.
                  </li>
                  <li>General Science.</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Paper II-(200 marks) Duration: Two hours
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Comprehension</li>
                  <li>Interpersonal skills including communication skills</li>
                  <li>Logical reasoning and analytical ability</li>
                  <li>Decision making and problem solving</li>
                  <li>General mental ability</li>
                  <li>
                    Basic numeracy (numbers and their relations, orders of
                    magnitude, etc.) (Class X level)
                  </li>
                  <li>
                    Data interpretation (charts, graphs, tables, data
                    sufficiency etc. — Class X level)
                  </li>
                </ul>
              </div>
              <div className="bg-brand-blue/5 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Important Notes:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Paper-II of the Civil Services (Preliminary) Examination
                    will be a qualifying paper with minimum qualifying marks
                    fixed at 33%.
                  </li>
                  <li>
                    The questions will be of multiple choice, objective type.
                  </li>
                  <li>
                    It is mandatory for the candidate to appear in both the
                    Papers of Civil Services (Prelim) Examination for the
                    purpose of evaluation. Therefore a candidate will be
                    disqualified in case he/she does not appear in both the
                    papers of Civil Services (Prelim) Examination.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Part B—Main Examination
              </h3>
              <p className="text-gray-600 mb-6">
                The main Examination is intended to assess the overall
                intellectual traits and depth of understanding of candidates
                rather than merely the range of their information and memory.
                The nature and standard of questions in the General Studies
                papers (Paper II to Paper V) will be such that a well-educated
                person will be able to answer them without any specialized
                study.
              </p>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Paper-I: Essay
                  </h4>
                  <p className="text-gray-600">
                    Candidates may be required to write essays on multiple
                    topics. They will be expected to keep closely to the subject
                    of the essay to arrange their ideas in orderly fashion, and
                    to write concisely. Credit will be given for effective and
                    exact expression.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Interview/Personality Test
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-600 mb-4">
                        The candidate will be interviewed by a Board who will
                        have before them a record of the candidate's career. The
                        candidate will be asked questions on matters of general
                        interest. The object of the Interview/Personality Test
                        is to assess the personal suitability of the candidate
                        for a career in public service by a Board of competent
                        and unbiased observers.
                      </p>
                      <p className="text-gray-600 mb-4">
                        The Interview/Personality Test is intended to judge the
                        mental calibre of a candidate. In broad terms this is
                        really an assessment of not only intellectual qualities
                        but also social traits and interest in current affairs.
                        Some of the qualities to be judged are:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                        <li>Mental alertness</li>
                        <li>Critical powers of assimilation</li>
                        <li>Clear and logical exposition</li>
                        <li>Balance of judgement</li>
                        <li>Variety and depth of interest</li>
                        <li>Ability for social cohesion and leadership</li>
                        <li>Intellectual and moral integrity</li>
                      </ul>
                      <p className="text-gray-600 mb-4">
                        The technique of the Interview/Personality Test is not
                        that of a strict cross-examination but of a natural,
                        though directed and purposive conversation which is
                        intended to reveal the mental qualities of the
                        candidate.
                      </p>
                      <p className="text-gray-600 mb-4">
                        The Interview/Personality Test is not intended to be a
                        test either of the specialized or general knowledge of
                        the candidates which has been already tested through
                        their written papers. Candidates are expected to have
                        taken an intelligent interest not only in their special
                        subjects of academic study but also in the events which
                        are happening around them both within and outside their
                        own State or Country as well as in modern currents of
                        thought and in new discoveries which should rouse the
                        curiosity of well-educated youth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-brand-blue" />
              List of Optional Subjects for Main Examination
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-2 text-gray-600">
                  {['Agriculture', 'Animal Husbandry and Veterinary Science', 'Anthropology', 'Botany', 'Chemistry', 'Civil Engineering', 'Commerce and Accountancy', 'Economics', 'Electrical Engineering', 'Geography', 'Geology', 'History', 'Law'].map((subject, index) => <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-blue rounded-full"></span>
                      {subject}
                    </li>)}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-2 text-gray-600">
                  {['Management', 'Mathematics', 'Mechanical Engineering', 'Medical Science', 'Philosophy', 'Physics', 'Political Science and International Relations', 'Psychology', 'Public Administration', 'Sociology', 'Statistics', 'Zoology'].map((subject, index) => <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-blue rounded-full"></span>
                      {subject}
                    </li>)}
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Literature Languages Available:
              </h3>
              <p className="text-gray-600">
                Literature of any one of the following languages: Assamese,
                Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri,
                Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia,
                Punjabi, Sanskrit, Santhali, Sindhi, Tamil, Telugu, Urdu and
                English.
              </p>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <ClipboardCheck className="h-6 w-6 mr-2 text-brand-blue" />
              UPSC CSE Cut-off Scores
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Prelims Cut-off Scores Last 5 years
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Category
                        </th>
                        {[2023, 2022, 2021, 2020, 2019].map(year => <th key={year} className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                            {year}
                          </th>)}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[{
                      category: 'General',
                      scores: ['75.41', '88.22', '87.54', '92.51', '98']
                    }, {
                      category: 'OBC',
                      scores: ['74.75', '87.54', '89.12', '89.12', '95.34']
                    }, {
                      category: 'ST',
                      scores: ['47.82', '69.35', '70.71', '68.71', '77.34']
                    }, {
                      category: 'SC',
                      scores: ['59.25', '74.08', '75.41', '74.84', '82']
                    }, {
                      category: 'PWD 1',
                      scores: ['40.40', '49.84', '68.02', '70.06', '53.34']
                    }].map((row, index) => <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {row.category}
                          </td>
                          {row.scores.map((score, idx) => <td key={idx} className="px-6 py-4 text-sm text-gray-600 text-center">
                              {score}
                            </td>)}
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Mains Cut-off Scores Last 5 years
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Category
                        </th>
                        {[2023, 2022, 2021, 2020, 2019].map(year => <th key={year} className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                            {year}
                          </th>)}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[{
                      category: 'General',
                      scores: ['741', '748', '745', '736', '751']
                    }, {
                      category: 'OBC',
                      scores: ['712', '714', '707', '698', '718']
                    }].map((row, index) => <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {row.category}
                          </td>
                          {row.scores.map((score, idx) => <td key={idx} className="px-6 py-4 text-sm text-gray-600 text-center">
                              {score}
                            </td>)}
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-brand-blue" />
              Recommended Books for Preparation
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Preliminary Examination
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Paper I
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[{
                      subject: 'Polity',
                      books: ['Indian Polity by Laxmikanth', 'Political Theory and Constitution at work-NCERT Class XI']
                    }, {
                      subject: 'Economy',
                      books: ['Indian Economy by Ramesh Singh', 'Mrunal.org articles', 'Macroeconomics – NCERT Class XII', 'Indian Economic Development – NCERT Class XI', 'Economic Survey (Selective reading from Prelims perspective)', 'The Hindu', 'Internet for understanding concepts (Arthapedia, Google, Youtube)']
                    }, {
                      subject: 'Ancient History of India',
                      books: ['Old NCERT by RS Sharma']
                    }, {
                      subject: 'Medieval History of India',
                      books: ['Old NCERT by Satish Chandra (Selective Reading)']
                    }, {
                      subject: 'Modern History',
                      books: ['A Brief history of Modern India- Spectrum Publications', "India's Struggle for Independence – Bipan Chandra (Selective Reading)", 'NCERT by Bipan Chandra (For the period 1700s to 1857)']
                    }, {
                      subject: 'Indian Art and Culture',
                      books: ['An Introduction to Indian Art – Class XI NCERT', 'Chapters related to culture in Ancient and Medieval India NCERTs', 'Centre for Cultural Resource and Training (CCRT) material', 'Heritage Crafts: Living Craft Traditions of India -NCERT']
                    }, {
                      subject: 'Environment and Biodiversity',
                      books: ['Shankar IAS book', 'PMF IAS Environment book', 'Ministry of Environment, Forest and Climate Change Website and India State of Forest Report', 'Down to earth Magazine']
                    }, {
                      subject: 'General Science',
                      books: ['General Science books – IX and X standard', 'The Hindu (Note down and read about the latest scientific terms, discoveries and inventions frequently mentioned in news)', 'Google and YouTube']
                    }, {
                      subject: 'Geography',
                      books: ['Fundamentals of Physical Geography XI NCERT', 'India: Physical Environment XI NCERT', 'Fundamentals of Human Geography XII NCERT', 'India: People and Economy XII NCERT', 'Certificate Physical and Human Geography: GC Leong', 'PMFIAS (Excellent resource for understanding complex topics)', 'Google and YouTube']
                    }, {
                      subject: 'Government Schemes',
                      books: ['Government schemes compilation by the websites']
                    }, {
                      subject: 'General Trivia',
                      books: ['Any coaching material', 'Google']
                    }, {
                      subject: 'Current Affairs',
                      books: ['The Hindu', 'PIB News', 'Any Institutes Current Affairs notes/Daily Current Affairs']
                    }].map((subject, index) => <div key={index} className="bg-gray-50 rounded-lg p-6">
                          <h5 className="font-medium text-gray-900 mb-3">
                            {subject.subject}
                          </h5>
                          <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            {subject.books.map((book, idx) => <li key={idx}>{book}</li>)}
                          </ul>
                        </div>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Paper II (CSAT)
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {['Analytic Reasoning by M K Pandey', 'Cracking the CSAT Paper by Arihant Experts', 'A Modern Approach to Verbal and Non-Verbal reasoning by RS Aggarwal', 'The Mantra of Csat Paper II by Gautam Puri', 'General Studies Paper II for UPSC Preliminary Examination- Tata McGraw Hill', 'CSAT Manual- Pearson'].map((book, index) => <li key={index}>{book}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Main Examination
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[{
                  paper: 'GS Paper I (Geography)',
                  books: ['Certificate Physical and Human Geography authored by G C Leong', 'Fundamentals of Physical Geography NCERT Class 11', 'Geography of India by Majid Husain', 'World Geography by Majid Husain', 'World Atlas (Orient Black Swan)']
                }, {
                  paper: 'GS Paper I (History, Indian Heritage & Culture)',
                  books: ['Ancient India by R.S Sharma', "India's Struggle for Independence by Bipan Chandra", 'India after Independence by Bipan Chandra', 'History of Medieval India by Satish Chandra', 'Indian Art and Culture by Nitin Singhania']
                }, {
                  paper: 'World History (GS Paper I)',
                  books: ['World History – by Krishna Reddy', 'History of the World – by Arjun Dev']
                }, {
                  paper: 'Indian Society (GS Paper I)',
                  books: ['Indian Society: Themes and Social Issues by Nadeem Hasnain', 'Indian Society – by M Senthil Kumar']
                }, {
                  paper: 'GS Paper II',
                  books: ['Indian Polity by M. Laxmikanth', 'Introduction to the Constitution of India authored by DD Basu', 'International Relations: Pushpesh Pant']
                }, {
                  paper: 'GS Paper III',
                  books: ['Indian Economy – Nitin Singhania', 'Environment and Disaster Management by Tata McGraw Hill', 'Challenges to Internal Security of India by Ashok Kumar']
                }, {
                  paper: 'Ethics (GS IV)',
                  books: ['Ethics, Integrity and Aptitude for Civil Services Main Examination by Subba Rao and P.N. Roy Chaudary', "Sanketh Reddy Sir's Class Notes"]
                }].map((section, index) => <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-medium text-gray-900 mb-3">
                        {section.paper}
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {section.books.map((book, idx) => <li key={idx}>{book}</li>)}
                      </ul>
                    </div>)}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Additional Study Material
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {['Economic Survey (Latest)', 'Budget (Latest)', 'Finance Commission Report (Latest)', 'Current Affairs (The Hindu Newspaper, Yojana Magazine, PIB Reports)', 'Annual reports by central ministries', 'NITI Aayog Reports', '2nd ARC Report'].map((material, index) => <li key={index}>{material}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>;
};