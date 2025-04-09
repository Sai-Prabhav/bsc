import React from 'react';
import { FileText, Download, BookOpen, Newspaper, FileBox } from 'lucide-react';
export const Journals = () => {
  const sections = [{
    title: 'Current Affairs',
    icon: FileText,
    items: [{
      title: 'Daily Current Affairs',
      description: 'Download latest daily current affairs updates',
      link: '#',
      type: 'download'
    }, {
      title: 'Monthly Magazine',
      description: 'Access monthly current affairs compilation',
      link: '#',
      type: 'download'
    }]
  }, {
    title: 'Previous Year Questions',
    icon: FileBox,
    items: [{
      title: 'Subject-wise PYQs',
      description: 'Download subject-wise previous year questions',
      link: '#',
      type: 'download'
    }, {
      title: 'Answer Keys Archive',
      description: 'Official UPSC answer keys archive',
      link: 'https://upsc.gov.in/examinations/answer-key/archives',
      type: 'external'
    }]
  }, {
    title: 'Study Materials',
    icon: BookOpen,
    items: [{
      title: 'NCERT Books',
      description: 'Access all NCERT textbooks online',
      link: 'https://ncert.nic.in/textbook.php',
      type: 'external'
    }, {
      title: 'NIOS Books',
      description: 'NIOS study materials and course content',
      link: 'https://nios.ac.in/online-course-material.aspx',
      type: 'external'
    }, {
      title: 'IGNOU Study Material',
      description: 'IGNOU study materials and resources',
      link: 'https://www.ignouhelp.in/ignou-study-material/',
      type: 'external'
    }]
  }, {
    title: 'Magazines',
    icon: Newspaper,
    items: [{
      title: 'Yojana',
      description: 'Monthly journal for socio-economic issues',
      link: 'https://yojanamagazine.online/',
      type: 'external'
    }, {
      title: 'Kurukshetra',
      description: 'Journal on rural development',
      link: 'https://yojanamagazine.online/kurukshetra/',
      type: 'external'
    }, {
      title: 'Down to Earth',
      description: 'Environmental magazine archives',
      link: 'https://www.downtoearth.org.in/archives',
      type: 'external'
    }]
  }, {
    title: 'Reports',
    icon: FileText,
    items: [{
      title: 'India State of Forest Report',
      description: 'Biennial assessment of forest resources',
      link: 'https://fsi.nic.in/forest-report-2021',
      type: 'external'
    }, {
      title: 'NITI Aayog Reports',
      description: 'Policy papers and publications',
      link: 'https://www.niti.gov.in/report-and-publication',
      type: 'external'
    }, {
      title: 'ARC Reports',
      description: 'Administrative Reforms Commission reports',
      link: 'https://darpg.gov.in/arc-reports',
      type: 'external'
    }]
  }];
  return <main>
      <div className="w-full bg-[#0E79C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-2">Downloads</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Access comprehensive study materials, current affairs, and important
            resources
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {sections.map((section, index) => <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <section.icon className="h-6 w-6 text-brand-blue" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, idx) => <div key={idx} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {item.type === 'download' ? <button className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button> : <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end">
                            Visit Website
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>}
                      </div>)}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </main>;
};