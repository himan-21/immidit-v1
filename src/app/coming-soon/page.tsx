'use client';

import { ArrowLeft, Mail, Users, Clock, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ComingSoon = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-orange-400 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300 opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="absolute top-0 left-0 flex items-center text-white hover:text-orange-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-6 w-6 mr-2" />
          Back to Home
        </button>

        {/* Main Content */}
        <div className="mt-16">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl font-bold mb-4">IMMIDIT</h1>
            <div className="w-32 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full text-orange-400 text-lg font-semibold backdrop-blur-sm border border-white border-opacity-30 mb-6">
              <Clock className="h-5 w-5 mr-2" />
              Coming Soon
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              We're Building Something Amazing
            </h2>
            <p className="text-xl sm:text-2xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered immigration assistance platform is in final development. 
              Be the first to experience seamless global mobility solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-3 border-white text-white rounded-xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              <ArrowLeft className="mr-3 h-6 w-6" />
              Back to Main Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;