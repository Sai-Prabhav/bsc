import React, { useState } from 'react';
import { Calendar, Trophy, Bell, Filter } from 'lucide-react';
export const NewsAndEvents = () => {
  const [filter, setFilter] = useState('all');
  const items = [
  // Events
  {
    title: 'UPSC Mock Interview Session',
    date: '2024-04-15',
    type: 'Event',
    status: 'Upcoming',
    description: 'Mock interview practice for UPSC aspirants with expert panel',
    venue: 'BSC Main Hall'
  }, {
    title: 'Scholarship Test 2024',
    date: '2024-05-01',
    type: 'Event',
    status: 'Upcoming',
    description: 'Annual scholarship examination for civil services aspirants',
    venue: 'BSC Examination Center'
  }, {
    title: 'Current Affairs Workshop',
    date: '2024-03-15',
    type: 'Event',
    status: 'Past',
    description: 'Interactive workshop on current affairs and their relevance in civil services',
    venue: 'BSC Seminar Hall'
  },
  // News
  {
    title: 'BSC Student Ranks 5th in UPSC',
    date: '2024-03-10',
    type: 'Achievement',
    description: 'Our student secures All India Rank 5 in UPSC Civil Services Examination 2023'
  }, {
    title: 'New Study Material Release',
    date: '2024-03-05',
    type: 'News',
    description: 'Launch of comprehensive study materials for State PSC examinations'
  }, {
    title: 'Faculty Addition',
    date: '2024-02-28',
    type: 'News',
    description: 'Welcome to Dr. Rajesh Kumar, former IAS officer, joining as Senior Faculty'
  }];
  const filteredItems = filter === 'all' ? items : items.filter(item => filter === 'events' ? item.type === 'Event' : item.type !== 'Event');
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming':
        return 'text-green-600 bg-green-50';
      case 'Ongoing':
        return 'text-yellow-600 bg-yellow-50';
      case 'Past':
        return 'text-gray-600 bg-gray-50';
      default:
        return 'text-brand-blue bg-brand-blue/10';
    }
  };
  return <main>
      <div className="w-full bg-[#0E79C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-2">News & Events</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming
            events at BSC
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'all' ? 'bg-brand-blue text-white' : 'text-gray-600 hover:text-brand-blue'}`}>
                All
              </button>
              <button onClick={() => setFilter('events')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'events' ? 'bg-brand-blue text-white' : 'text-gray-600 hover:text-brand-blue'}`}>
                Events
              </button>
              <button onClick={() => setFilter('news')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'news' ? 'bg-brand-blue text-white' : 'text-gray-600 hover:text-brand-blue'}`}>
                News
              </button>
            </div>
          </div>
          {/* Items Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h2>
                    <div className="flex gap-2">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(item.type === 'Event' ? item.status : item.type)}`}>
                        {item.type === 'Event' ? item.status : item.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-brand-blue">
                    {new Date(item.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.type === 'Event' && <div className="text-sm text-gray-500">
                    <span className="font-medium">Venue:</span> {item.venue}
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </main>;
};