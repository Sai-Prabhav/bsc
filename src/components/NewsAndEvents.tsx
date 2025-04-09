import React from "react";
import { Calendar, Trophy, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const NewsAndEvents = () => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };
  const upcomingEvents = [{
    title: "UPSC Mock Interview Session",
    date: "2024-04-15",
    type: "Event",
    description: "Mock interview practice for UPSC aspirants with expert panel"
  }, {
    title: "Scholarship Test 2024",
    date: "2024-05-01",
    type: "Event",
    description: "Annual scholarship examination for civil services aspirants"
  }];
  const recentNews = [{
    title: "BSC Student Ranks 5th in UPSC",
    date: "2024-03-10",
    type: "Achievement",
    description: "Our student secures All India Rank 5 in UPSC Civil Services Examination 2023"
  }, {
    title: "New Study Material Release",
    date: "2024-03-05",
    type: "News",
    description: "Launch of comprehensive study materials for State PSC examinations"
  }];
  return <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at BSC
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Events */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-brand-blue" />
              <h3 className="text-xl font-semibold text-gray-900">
                Upcoming Events
              </h3>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </h4>
                    <span className="text-sm text-brand-blue">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>)}
            </div>
          </div>
          {/* Recent News */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Bell className="h-6 w-6 text-brand-blue" />
              <h3 className="text-xl font-semibold text-gray-900">
                Recent News
              </h3>
            </div>
            <div className="space-y-4">
              {recentNews.map((news, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {news.title}
                      </h4>
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-brand-blue/10 text-brand-blue mt-1">
                        {news.type}
                      </span>
                    </div>
                    <span className="text-sm text-brand-blue">
                      {formatDate(news.date)}
                    </span>
                  </div>
                  <p className="text-gray-600">{news.description}</p>
                </div>)}
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/news-events" className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-gradient-blue-end transition-colors">
            View All News & Events <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>;
};