'use client';

import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Redirect to Tally form
    // window.location.href = 'https://tally.so/r/contact-form';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-orange-500">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <p> Coming Soon... </p>
        <p> Meanwhile you can reach out to us on our Linkedin... </p>
      </div>
    </div>
  );
};

export default Contact;