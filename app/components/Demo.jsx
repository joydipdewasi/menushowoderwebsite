"use client";

import React from 'react';

export default function DemoPage() {
  // Replace this with your actual Google Form link
  const googleFormLink = "https://docs.google.com/forms/d/your-id-here/viewform";

  const galleryItems = [
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Dashboard Walkthrough' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80', title: 'Digital Menu Interface' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800&q=80', title: 'WhatsApp Billing View' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', title: 'Table Booking Process' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-8 px-4">
      
      {/* LEFT SIDE: Media Gallery (Videos & Photos) */}
      <div className="w-full lg:w-2/3 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">See it in Action</h1>
          <p className="text-gray-600">Explore how our platform simplifies your restaurant operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group">
              <div className="relative aspect-video bg-black flex items-center justify-center">
                {item.type === 'video' ? (
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <span className="text-xs font-medium uppercase tracking-wider text-blue-500">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Sticky Booking Sidebar */}
      <div className="w-full lg:w-1/3">
        <div className="sticky top-24 bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-lg text-center">
          <div className="mb-6">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Limited Offer
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-4">
              Try it Free for <span className="text-blue-600">1 Month</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Get full access to all features with zero commitment. No credit card required.
            </p>
          </div>

          <ul className="text-left space-y-3 mb-8 text-sm text-gray-700">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Full Digital Menu Setup
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              WhatsApp Billing Integration
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              24/7 Priority Support
            </li>
          </ul>

          <a 
            href={googleFormLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            Book My Free Demo
          </a>
          
          <p className="mt-4 text-xs text-gray-400">
            Clicking will open our secure Google Form registration.
          </p>
        </div>
      </div>

    </div>
  );
}