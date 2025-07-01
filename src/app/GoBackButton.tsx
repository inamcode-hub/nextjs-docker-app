'use client';

import { ArrowLeft } from 'lucide-react';

export default function GoBackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors"
    >
      <ArrowLeft size={20} />
      Go Back
    </button>
  );
}