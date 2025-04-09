import React, { useState } from "react";
import {
    Video,
    BookOpen,
    Library,
    Search,
    BoxIcon,
    ClipboardCheck,
    Clock,
    Target,
} from "lucide-react";
import { Link } from "react-router-dom";
export const LearningHub = () => {
    const [activeTab, setActiveTab] = useState("videos");
    const resources = {
        videos: [
            {
                title: "Understanding Indian Polity",
                duration: "2h 30m",
                author: "Dr. Rajesh Kumar",
                level: "Advanced",
                views: "2.5k",
                thumbnail:
                    "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=320&h=180&q=80",
            },
            {
                title: "Economics for UPSC",
                duration: "1h 45m",
                author: "Prof. Meena Sharma",
                level: "Intermediate",
                views: "1.8k",
                thumbnail:
                    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=320&h=180&q=80",
            },
        ],
        mockTests: [
            {
                title: "UPSC Prelims Mock Test Series 1",
                duration: "2h",
                questions: "100 Questions",
                difficulty: "Medium",
                attempted: "1.2k times",
                date: "Available Now",
            },
            {
                title: "UPSC Mains GS Paper I Mock",
                duration: "3h",
                questions: "Essay Format",
                difficulty: "Advanced",
                attempted: "800 times",
                date: "Available Now",
            },
        ],
        previousTests: [
            {
                title: "UPSC CSE 2023 Prelims Paper",
                type: "Previous Year Paper",
                questions: "100 Questions",
                includes: "Detailed Solutions",
                year: "2023",
            },
            {
                title: "UPSC CSE 2022 Prelims Paper",
                type: "Previous Year Paper",
                questions: "100 Questions",
                includes: "Detailed Solutions",
                year: "2022",
            },
        ],
        books: [
            {
                title: "India’s Struggle for Independence",
                author: "Bipan Chandra",
                topic: "History",
            },
            {
                title: "Indian Art and Culture",
                author: "Nitin Singhania",
                topic: "History",
            },
            {
                title: "NCERT XI (Ancient & Medieval)",
                author: "–",
                topic: "History",
            },
            {
                title: "NCERT XII (Modern Indian History)",
                author: "–",
                topic: "History",
            },
            {
                title: "A Brief History of Modern India",
                author: "Rajiv Ahir",
                topic: "History",
            },
            {
                title: "Certificate Physical Geography",
                author: "G C Leong",
                topic: "Geography",
            },
            {
                title: "NCERT VI – X (Old Syllabus)",
                author: "–",
                topic: "Geography",
            },
            {
                title: "NCERT XI, XII (New Syllabus)",
                author: "–",
                topic: "Geography",
            },
            {
                title: "World Atlas",
                author: "Orient Black Swan",
                topic: "Geography",
            },
            {
                title: "Indian Polity",
                author: "M Laxmikanth",
                topic: "Indian Polity",
            },
            { title: "NCERT IX-XII", author: "–", topic: "Indian Polity" },
            {
                title: "Indian Economy",
                author: "Nitin Singhania",
                topic: "Economics",
            },
            {
                title: "Economic Development & Policies in India",
                author: "Jain & Ohri",
                topic: "Economics",
            },
            { title: "NCERT XI", author: "–", topic: "Economics" },
            {
                title: "NCERT XII (Contemporary World Politics)",
                author: "–",
                topic: "International Relations",
            },
            {
                title: "Tata McGraw Hill CSAT Manual",
                author: "–",
                topic: "CSAT",
            },
            {
                title: "Verbal & Non-Verbal Reasoning",
                author: "R S Aggarwal",
                topic: "CSAT",
            },
            {
                title: "IAS General Studies Prelims Solved Papers",
                author: "Vishal Publications",
                topic: "Solved Papers",
            },
            {
                title: "India’s Ancient Past",
                author: "R.S. Sharma",
                topic: "Ancient India",
            },
            {
                title: "History of Ancient and Early Medieval India",
                author: "Upinder Singh",
                topic: "Ancient India",
            },
            {
                title: "Ancient History of India",
                author: "Snehil Tripathi and Sonali Bansal",
                topic: "Ancient India",
            },
            {
                title: "Indian Art, Heritage, and Culture",
                author: "Pushpesh Pant",
                topic: "Indian Art and Culture",
            },
            {
                title: "History Of Medieval India",
                author: "Satish Chandra",
                topic: "Medieval India",
            },
            {
                title: "History Of Modern India",
                author: "Bipan Chandra",
                topic: "Modern India",
            },
            {
                title: "India’s Struggle For Independence",
                author: "Bipan Chandra",
                topic: "Modern India",
            },
            {
                title: "The Wonder that was India",
                author: "A.L. Bhasham",
                topic: "Ancient India and Culture",
            },
            {
                title: "The Wonder that was India",
                author: "S A A Rizvi",
                topic: "Medieval India and Culture",
            },
            {
                title: "A Brief History of Modern India",
                author: "Rajiv Ahir",
                topic: "Modern India",
            },
            {
                title: "World Geography by",
                author: "Majid Husain",
                topic: "World Geography",
            },
            {
                title: "Physical Geography",
                author: "Savindra Singh",
                topic: "Physical Geography",
            },
            {
                title: "Human Geography",
                author: "Majid Husain",
                topic: "Human Geography",
            },
            {
                title: "Introduction to the Constitution of India",
                author: "D. D. Basu",
                topic: "Constitution",
            },
            {
                title: "Science and Technology",
                author: "Sheelwant Singh",
                topic: "Science and Technology",
            },
            {
                title: "Environmental Studies: From Crisis to Cure",
                author: "Rajagopalan",
                topic: "Environment",
            },
            {
                title: "Environment",
                author: "Ravi P Agrahari",
                topic: "Environment",
            },
            {
                title: "Quantitative Aptitude",
                author: "R. S. Aggarwal",
                topic: "Quantitative Aptitude",
            },
            {
                title: "Analytical Reasoning",
                author: "M. K. Pandey",
                topic: "Reasoning",
            },
            {
                title: "Verbal & Non-Verbal Reasoning",
                author: "R. S. Aggarwal",
                topic: "Reasoning",
            },
            {
                title: "Essays for Civil Services",
                author: "Pulkit Khare",
                topic: "Essay",
            },
            {
                title: "India After Gandhi",
                author: "Ramchandra Guha",
                topic: "Post-Independence",
            },
            {
                title: "Mastering Modern World History",
                author: "Norman Lowe",
                topic: "World History",
            },
            {
                title: "World History: Modern World History",
                author: "Uddipan",
                topic: "World History",
            },
            {
                title: "Social Problems In India",
                author: "Ram Ahuja",
                topic: "Indian Society",
            },
            {
                title: "Pax Indica",
                author: "Shashi Tharoor",
                topic: "International Relations",
            },
            {
                title: "The India Way",
                author: "S. Jaishankar",
                topic: "International Relations",
            },
            {
                title: "Internal Security",
                author: "M. Karthikeyan",
                topic: "Internal Security",
            },
            {
                title: "Internal Security of India and Disaster Management",
                author: "Syed Waquar Raza",
                topic: "Internal Security",
            },
            {
                title: "Ethical Dilemmas of a Civil Servant",
                author: "Anil Swarup",
                topic: "Ethics",
            },
        ],
        journals: [
            {
                title: "NCERT Books",
                type: "Study Material",
                format: "Online",
                lastUpdated: "2024",
                link: "https://ncert.nic.in/textbook.php",
            },
            {
                title: "NIOS Study Material",
                type: "Study Material",
                format: "Online",
                lastUpdated: "2024",
                link: "https://nios.ac.in/online-course-material.aspx",
            },
            {
                title: "Down to Earth",
                type: "Magazine",
                format: "Online",
                lastUpdated: "Monthly",
                link: "https://www.downtoearth.org.in/",
            },
            {
                title: "Yojana Magazine",
                type: "Magazine",
                format: "Online",
                lastUpdated: "Monthly",
                link: "https://www.publicationsdivision.nic.in/journals/index.php?route=page/yojana",
            },
            {
                title: "Kurukshetra Journal",
                type: "Magazine",
                format: "Online",
                lastUpdated: "Monthly",
                link: "https://www.publicationsdivision.nic.in/journals/index.php?route=page/kurukshetra",
            },
            {
                title: "India State of Forest Report",
                type: "Report",
                format: "PDF",
                lastUpdated: "2021",
                link: "https://fsi.nic.in/forest-report-2023",
            },
            {
                title: "NITI Aayog Reports",
                type: "Report",
                format: "Online",
                lastUpdated: "2024",
                link: "https://www.niti.gov.in/report-and-publication",
            },
        ],
        initiatives: [
            {
                title: "Current Affairs",
                description:
                    "Comprehensive coverage of contemporary issues with in-depth analysis",
                features: [
                    "Comprehensive coverage of contemporary and current affairs related issues",
                    "Correlation of current issues with the static syllabus for a holistic understanding",
                    "In-depth analysis of current issues with backward and forward linkages",
                    "Understanding the kind of questions that might be framed from current issues",
                    "Developing the skills to integrate current affairs in writing answers",
                ],
                status: "Ongoing",
                type: "Daily Updates",
            },
            {
                title: "UPSC 60 Days Challenge",
                description:
                    "Intensive 60-day practice program for UPSC preparation",
                features: [
                    "Dive into 60 days of practice designed to sharpen your skills",
                    "Daily one Question is posted in Telegram and BSC IAS Academy's webpage",
                    "Register yourself to attend the question",
                    "Track your progress on the Leadership board",
                ],
                status: "Registration Open",
                type: "Challenge Program",
            },
            {
                title: "75 Days Revision for Prelims",
                description:
                    "Structured revision program with multiple coverage of syllabus",
                features: [
                    "Comprehensive coverage of the Prelims syllabus with multiple revisions",
                    "Methodical subject coverage with detailed timetable",
                    "Triple revision of each subject/material",
                    "Step-by-step method with clear goals",
                    "Daily CSAT preparation",
                    "Regular full-length Prelims Tests",
                    "Coverage of NCERTs, standard books, Current Affairs, and 15 years PYQs",
                ],
                status: "Coming Soon",
                type: "Revision Program",
            },
            {
                title: "Mains Answer Writing",
                description:
                    "Daily practice and evaluation for Mains preparation",
                features: [
                    "Daily 2 Subject wise questions with evaluation",
                    "One-to-One Evaluation",
                    "PYQ Quiz",
                    "General Studies Paper I (Year wise)",
                    "General Studies Paper I (Subject wise)",
                    "General Studies Paper II (Year wise)",
                ],
                status: "Ongoing",
                type: "Daily Practice",
            },
        ],
    };
    return (
        <main>
            <div className="w-full bg-[#0E79C1] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center mb-2">
                        Learning Hub
                    </h1>
                    <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
                        Access comprehensive study materials, current affairs,
                        and important resources
                    </p>
                </div>
            </div>
            <div className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-4 mb-12 flex-wrap">
                        {[
                            {
                                id: "videos",
                                icon: Video,
                                label: "Video Lectures",
                            },
                            {
                                id: "mockTests",
                                icon: ClipboardCheck,
                                label: "Mock Tests",
                            },
                            {
                                id: "previousTests",
                                icon: Clock,
                                label: "Previous Tests",
                            },
                            {
                                id: "books",
                                icon: BookOpen,
                                label: "Books",
                            },
                            {
                                id: "journals",
                                icon: BoxIcon,
                                label: "Downloads",
                            },
                            {
                                id: "initiatives",
                                icon: Target,
                                label: "Initiatives",
                            },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors mb-2 ${
                                    activeTab === tab.id
                                        ? "bg-brand-blue text-white"
                                        : "text-gray-600 hover:text-brand-blue"
                                }`}
                            >
                                <tab.icon className="h-5 w-5" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                    {activeTab === "videos" && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.videos.map((video, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">
                                            {video.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-2">
                                            By {video.author}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span>{video.duration}</span>
                                            <span>{video.level}</span>
                                            <span>{video.views} views</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "mockTests" && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.mockTests.map((test, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm p-6"
                                >
                                    <h3 className="text-lg font-semibold mb-4">
                                        {test.title}
                                    </h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p>Duration: {test.duration}</p>
                                        <p>Questions: {test.questions}</p>
                                        <p>Difficulty: {test.difficulty}</p>
                                        <p>Attempted: {test.attempted}</p>
                                    </div>
                                    <button className="mt-4 w-full bg-brand-blue text-white px-4 py-2 rounded-lg">
                                        Start Test
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "previousTests" && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.previousTests.map((test, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm p-6"
                                >
                                    <h3 className="text-lg font-semibold mb-4">
                                        {test.title}
                                    </h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p>Year: {test.year}</p>
                                        <p>Type: {test.type}</p>
                                        <p>Questions: {test.questions}</p>
                                        <p>Includes: {test.includes}</p>
                                    </div>
                                    <button className="mt-4 w-full bg-brand-blue text-white px-4 py-2 rounded-lg">
                                        View Paper
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "books" && (
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {resources.books.map((book, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                                >
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">
                                            {book.title}
                                        </h3>

                                        {book.author != "–" && (
                                            <p className="text-gray-600 text-sm mb-2">
                                                {" "}
                                                by {book.author}
                                            </p>
                                        )}

                                        <p className="text-gray-500 text-sm">
                                            {book.topic}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "journals" && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.journals.map((resource, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm p-6"
                                >
                                    <h3 className="text-lg font-semibold mb-2">
                                        {resource.title}
                                    </h3>
                                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                                        <p>Type: {resource.type}</p>
                                        <p>Format: {resource.format}</p>
                                        <p>
                                            Last Updated: {resource.lastUpdated}
                                        </p>
                                    </div>
                                    {resource.format === "PDF" ? (
                                        <button className="w-full bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-gradient-blue-end transition-colors">
                                            Download
                                        </button>
                                    ) : (
                                        <a
                                            href={resource.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-gradient-blue-end transition-colors"
                                        >
                                            Access Online
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "initiatives" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {resources.initiatives.map((initiative, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {initiative.title}
                                            </h3>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                                                {initiative.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            {initiative.description}
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                            <span className="text-sm font-medium text-gray-700">
                                                Program Type:
                                            </span>
                                            <span className="ml-2 text-sm text-gray-600">
                                                {initiative.type}
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-medium text-gray-900">
                                                Key Features:
                                            </h4>
                                            <ul className="space-y-2">
                                                {initiative.features.map(
                                                    (feature, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-gray-600"
                                                        >
                                                            <span className="h-1.5 w-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0"></span>
                                                            <span>
                                                                {feature}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <button className="mt-6 w-full bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-gradient-blue-end transition-colors">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};
