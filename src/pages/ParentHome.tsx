import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const ParentHome = () => {
  return <main>
      <section className="w-full bg-gradient-to-br from-gradient-blue-start to-gradient-blue-end text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Empowering Communities Since 1991
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The Bangalore South Centre (BSC) is a charitable, voluntary social
              organization committed to uplifting communities through education,
              empowerment, and social welfare initiatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-brand-yellow text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Become a Member
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                Joining hands for a better society. We are committed to work
                towards the upliftment of Kamma community and people in general.
              </p>
              <Link to="/about" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end font-semibold">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About BSC</h2>
              <p className="text-gray-600">
                Established in 1991, BSC has been distributing educational
                scholarships for poor and needy, especially parentless children,
                for over two decades.
              </p>
              <Link to="/about" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end font-semibold">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                BSC IAS Academy
              </h2>
              <p className="text-gray-600 mb-6">
                A comprehensive program to train students for competitive
                examinations conducted by UPSC, State PSCs, Banking Sector, and
                more.
              </p>
              <Link to="/ias-academy" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end font-semibold">
                Explore Programs <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kamma Mahila Souharda
              </h2>
              <p className="text-gray-600 mb-6">
                A women-managed credit cooperative society focused on economic
                empowerment and sustainable development of our community.
              </p>
              <Link to="/mahila-bank" className="inline-flex items-center text-brand-blue hover:text-gradient-blue-end font-semibold">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>;
};