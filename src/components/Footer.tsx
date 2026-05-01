import React from 'react';
export const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/5 mt-12">
      <p className="text-gray-500 text-sm">
        Designed & Built by{' '}
        <span className="text-neonRed">Rumeth Wijethunge</span>
      </p>
      <p className="text-gray-600 text-xs mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>);

};