import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export const Contact = () => {
  return <main>
      <div className="w-full bg-[#0E79C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Get in touch with us for any queries about our courses or admission
            process
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-brand-blue flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">
                        The Bangalore South Center
                        <br />
                        # 2267, 1st Floor
                        <br />
                        22nd Cross, K R Road
                        <br />
                        Banshankari 2nd Stage
                        <br />
                        Bangalore - 560070
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-brand-blue flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <a href="tel:+918073556254" className="text-brand-blue hover:text-gradient-blue-end">
                        +91 80735 56254
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-brand-blue flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <a href="mailto:ContactUs@TheBangaloreSouthCenter.Org" className="text-brand-blue hover:text-gradient-blue-end break-words">
                        ContactUs@TheBangaloreSouthCenter.Org
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-brand-blue flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-blue-end transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>;
};