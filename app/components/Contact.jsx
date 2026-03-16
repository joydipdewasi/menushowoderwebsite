"use client";

import React from 'react';

export default function ContactPage() {
  // Replace these with your actual links
  const googleFormLink = "https://docs.google.com/forms/d/your-id-here/viewform";
  const instagramLink = "https://instagram.com/yourbusiness";
  const facebookLink = "https://facebook.com/yourbusiness";

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* LEFT SECTION: Branding/Message */}
        <div className="bg-blue-700 text-white p-10 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Have questions about our digital menu or billing system? We're here to help you modernize your restaurant.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-600 p-2 rounded-full">📍</span>
              <span>Available Worldwide</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-blue-600 p-2 rounded-full">💬</span>
              <span>24/7 Support via WP</span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Buttons/Links */}
        <div className="p-10 md:w-1/2 flex flex-col justify-center space-y-6 bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-500 text-sm mb-6">Choose your preferred way to reach us.</p>
          </div>

          {/* Main Google Form Button */}
          <a 
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-700 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all transform hover:scale-[1.02] shadow-md flex items-center justify-center space-x-2"
          >
            <span>📩</span>
            <span>Send Message</span>
          </a>

          <div className="relative flex items-center py-4">
            <div className="grow border-t border-gray-300"></div>
            <span className="shrink mx-4 text-gray-400 text-sm uppercase tracking-widest font-semibold">Socials</span>
            <div className="grow border-t border-gray-300"></div>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Instagram Button */}
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 border-2 border-pink-500 text-pink-500 font-bold rounded-xl hover:bg-pink-500 hover:text-white transition-colors"
            >
              <span>Instagram</span>
            </a>

            {/* Facebook Button */}
            <a 
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
            >
              <span>Facebook</span>
            </a>
          </div>

          <p className="text-center text-xs text-gray-400 pt-4 italic">
            Usually responds within 2 hours.
          </p>
        </div>
      </div>
    </div>
  );
}