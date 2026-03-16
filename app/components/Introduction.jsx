import React from 'react';

export default function IntroductionPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-8 px-4">
      
      {/* LEFT SIDE: Big Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          {/* Using a high-quality placeholder image for a restaurant/tech feel */}
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Modern Restaurant Management" 
            className="w-full h-125 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay Decoration */}
          <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent"></div>
        </div>
      </div>

      {/* RIGHT SIDE: Content & Goals */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">
            Our Mission
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Revolutionize Your <br />
            <span className="text-blue-700">Dining Experience</span>
          </h1>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          We bridge the gap between traditional hospitality and modern technology. 
          Our goal is to empower restaurant owners with seamless digital tools that 
          increase efficiency and delight every customer who walks through your doors.
        </p>

        {/* GOALS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          
          <div className="p-4 bg-white border-l-4 border-blue-600 shadow-sm rounded-r-lg">
            <h3 className="font-bold text-gray-800">Online Table Booking</h3>
            <p className="text-sm text-gray-500">Eliminate wait times with instant reservations.</p>
          </div>

          <div className="p-4 bg-white border-l-4 border-green-600 shadow-sm rounded-r-lg">
            <h3 className="font-bold text-gray-800">WhatsApp Billing</h3>
            <p className="text-sm text-gray-500">Automated invoices sent directly to customer phones.</p>
          </div>

          <div className="p-4 bg-white border-l-4 border-orange-600 shadow-sm rounded-r-lg">
            <h3 className="font-bold text-gray-800">Digital Menu</h3>
            <p className="text-sm text-gray-500">Interactive, high-res menus that update in real-time.</p>
          </div>

          <div className="p-4 bg-white border-l-4 border-purple-600 shadow-sm rounded-r-lg">
            <h3 className="font-bold text-gray-800">Direct Ordering</h3>
            <p className="text-sm text-gray-500">Customers order from their table with one click.</p>
          </div>

        </div>

        {/* CALL TO ACTION */}
        <div className="pt-6">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
            Boost Your Sales Now
          </button>
          <p className="mt-4 text-sm text-gray-400 italic">
            * Join over 500+ businesses growing with our platform.
          </p>
        </div>
      </div>
      
    </div>
  );
}