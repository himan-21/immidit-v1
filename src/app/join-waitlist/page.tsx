'use client';

import { useEffect } from 'react';

const JoinWaitlist = () => {
  useEffect(() => {
    // Redirect to Tally form
    // window.location.href = 'https://tally.so/r/waitlist-form';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-orange-500">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <p> Coming Soon... </p>
        {/* <p className="text-xl font-semibold">Redirecting to waitlist...</p> */}
      </div>
    </div>
  );
};

export default JoinWaitlist;