'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Mock data for final winners
const finalWinners = [
  'robin_',
  'ginse',
  'suttu',
  'aryan',
  'binse'
];

// Mock data for substitute winners
const substituteWinners = [
  'akash_',
  'james_',
  'riya_',
  'jinto_',
  'priya_'
];

function Header() {
  return (
    <header className="w-full p-4 border-b border-solid border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <span className="font-bold text-lg">Instagram Comment Picker</span>
      </div>
    </header>
  );
}

function WinnerItem({ username, isSubstitute = false }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${isSubstitute ? 'bg-blue-100 dark:bg-blue-900' : 'bg-green-100 dark:bg-green-900'}`}>
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white font-bold">
        {username.charAt(0).toUpperCase()}
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">{username}</span>
        </div>
      </div>
      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${isSubstitute ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200' : 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200'}`}>
        {isSubstitute ? 'Substitute 🔄' : 'Winner 🎉'}
      </span>
    </div>
  );
}

function CommentCounter({ currentCount, totalCount }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold mb-2">Counting Comments</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
        <div 
          className="bg-gradient-to-r from-pink-500 to-purple-600 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, (currentCount / totalCount) * 100)}%` }}
        ></div>
      </div>
      <p className="text-lg font-mono">
        <span className="font-bold">{currentCount}</span>
        <span className="text-gray-500">/{totalCount}</span>
      </p>
    </div>
  );
}

function InstagramPostPreview() {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden max-w-md mx-auto">
      <div className="p-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
        <span className="font-bold text-sm">exploring_kerala__</span>
      </div>
      
      {/* Instagram reel embed - for demo purposes we'll show a placeholder */}
      <div className="aspect-square bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/20 backdrop-blur-sm absolute inset-0 z-0"></div>
          <div className="z-10 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
            <p className="text-white text-sm font-semibold">Watch Reel</p>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-auto z-20 bg-white/80 dark:bg-black/80 p-2 rounded w-full text-center">
          https://www.instagram.com/exploring_kerala__/reel/DItQA-RvNnM
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex gap-4 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7.1 7.08a.5.5 0 0 0 .7 0L19 14Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 7.33A7 7 0 1 1 7 4.67" />
            <path d="M15.45 15.5L18.8 22.8a1 1 0 0 0 1.8-.9l-1.14-2.4a3 3 0 0 1 .19-2.8L22 13" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 3 9.218 10.083" />
            <path d="M11.698 20.334 22 3.001 2 14.335l9.698 5.999" />
            <path d="M9.218 10.084 11.698 20.334" />
          </svg>
        </div>
        <p className="text-sm mb-1"><span className="font-bold">exploring_kerala__</span> Exciting giveaway! Comment to enter for a chance to win.</p>
        <p className="text-xs text-gray-500">View all 23367 comments</p>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [reelUrl, setReelUrl] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  
  // Basic validation for Instagram reel URL
  function validateUrl(url) {
    // Very basic validation, just checking if it contains instagram.com and reel
    return url.includes('instagram.com') && (url.includes('/reel/') || url.includes('/p/'));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    setError('');
    
    if (!reelUrl.trim()) {
      setError('Please enter an Instagram reel URL');
      return;
    }
    
    if (!validateUrl(reelUrl)) {
      setError('Please enter a valid Instagram reel URL');
      return;
    }
    
    setIsValidating(true);
    
    // Simulate API check with a timeout
    setTimeout(() => {
      // Navigate to the picker page with the reel URL as a query parameter
      router.push(`/picker?reelUrl=${encodeURIComponent(reelUrl)}`);
    }, 1000);
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-600 inline-block text-transparent bg-clip-text">
            Instagram Comment Picker
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Pick random winners from your Instagram reels comments. Simply paste your Instagram reel URL below and click "Continue".
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold mb-6">Enter Instagram Reel URL</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="reel-url">
                Instagram Reel URL
              </label>
              <input 
                type="text" 
                id="reel-url"
                placeholder="https://www.instagram.com/username/reel/AbCdEfG..."
                value={reelUrl}
                onChange={(e) => setReelUrl(e.target.value)}
                className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
              )}
            </div>
            
            <button 
              type="submit"
              disabled={isValidating}
              className="w-full rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 mt-4 text-sm font-semibold text-white shadow-sm hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 flex items-center justify-center"
            >
              {isValidating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Validating...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>
          
          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
            <h3 className="text-sm font-medium mb-3">Example Instagram Reel URLs:</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400" onClick={() => setReelUrl('https://www.instagram.com/exploring_kerala__/reel/DItQA-RvNnM')}>
                https://www.instagram.com/exploring_kerala__/reel/DItQA-RvNnM
              </li>
              <li className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400" onClick={() => setReelUrl('https://www.instagram.com/p/AbCdEfGhIjK/')}>
                https://www.instagram.com/p/AbCdEfGhIjK/
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mt-8">
          <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
            How It Works
          </h3>
          <ol className="list-decimal pl-5 text-blue-700 dark:text-blue-300 space-y-2">
            <li>Enter the URL of your Instagram reel</li>
            <li>Click "Continue" to proceed to comment picker</li>
            <li>The system will count all comments on the post</li>
            <li>Select how many winners you want (1-5)</li>
            <li>Randomly pick winners from the specified usernames</li>
            <li>View the 5 substitute winners if needed</li>
          </ol>
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>Instagram Comment Picker - For demonstration purposes only</p>
        <p className="mt-1">Not affiliated with Instagram or Meta</p>
      </footer>
    </div>
  );
}
