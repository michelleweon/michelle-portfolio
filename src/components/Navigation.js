import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
    <div className="max-w-4xl mx-auto px-6 py-4">
      <ul className="flex justify-center space-x-8">
        {['Home', 'About', 'Work', 'Blog', 'Contact'].map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page.toLowerCase())}
              className={`${
                currentPage === page.toLowerCase()
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-600 hover:text-pink-600'
              } px-2 py-1 text-sm font-medium transition-colors`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navigation;
