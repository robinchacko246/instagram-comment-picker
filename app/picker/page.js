'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// Mock data for final winners
const finalWinners = [
  'fasalu.faaz',
  'ashikms_oneofakind',
  'arun.varma36',
   'fazil_k_kavalammakal'
];

// Mock data for substitute winners
const substituteWinners = [
  'alex_george_thrissure',
  '__thejes__',
  'james_antony678',
 
];

function Header() {
  return (
    <header className="w-full p-5 border-b border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
        <span className="font-bold text-xl tracking-tight">Instagram Comment Picker</span>
      </div>
    </header>
  );
}

function WinnerItem({ username, isSubstitute = false }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg ${isSubstitute ? 'bg-blue-50 dark:bg-blue-900/30' : 'bg-green-50 dark:bg-green-900/30'} border ${isSubstitute ? 'border-blue-100 dark:border-blue-800' : 'border-green-100 dark:border-green-800'} transition-all duration-300 hover:shadow-md`}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-sm">
        {username.charAt(0).toUpperCase()}
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">{username}</span>
        </div>
      </div>
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${isSubstitute ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200' : 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200'}`}>
        {isSubstitute ? 'Substitute 🔄' : 'Winner 🎉'}
      </span>
    </div>
  );
}

function CommentCounter({ currentCount, totalCount }) {
  const percentage = Math.min(100, (currentCount / totalCount) * 100);
  
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300">
      <h3 className="text-lg font-semibold mb-3">Counting Comments</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 mb-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-pink-500 to-purple-600 h-5 rounded-full transition-all duration-500 ease-out flex items-center justify-end"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 20 && (
            <span className="text-xs text-white font-medium mr-2">{percentage.toFixed(0)}%</span>
          )}
        </div>
      </div>
      <p className="text-lg font-mono">
        <span className="font-bold">{currentCount.toLocaleString()}</span>
        <span className="text-gray-500">/{totalCount.toLocaleString()}</span>
      </p>
    </div>
  );
}

function InstagramPostPreview({ reelUrl }) {
  // Extract username and reel ID from the URL if provided
  let username = "exploring_kerala__";
  let reelId = "DItQA-RvNnM";
  
  if (reelUrl) {
    try {
      const urlParts = reelUrl.split('/');
      // Find username and reel ID in the URL
      for (let i = 0; i < urlParts.length; i++) {
        if (urlParts[i] === 'instagram.com' && i + 1 < urlParts.length) {
          username = urlParts[i + 1].replace('@', '');
        }
        if (urlParts[i] === 'reel' && i + 1 < urlParts.length) {
          reelId = urlParts[i + 1].split('?')[0]; // Remove query params if any
        }
      }
    } catch (error) {
      console.log('Error parsing URL:', error);
    }
  }

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden max-w-md mx-auto">
      <div className="p-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
        <span className="font-bold text-sm">{username}</span>
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
          https://www.instagram.com/{username}/reel/{reelId}
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
        <p className="text-sm mb-1"><span className="font-bold">{username}</span> Exciting giveaway! Comment to enter for a chance to win.</p>
        <p className="text-xs text-gray-500">View all 23367 comments</p>
      </div>
    </div>
  );
}

export default function CommentPicker() {
  const searchParams = useSearchParams();
  const reelUrl = searchParams.get('reelUrl') || 'https://www.instagram.com/exploring_kerala__/reel/DItQA-RvNnM';
  
  const [commentCount, setCommentCount] = useState(0);
  const [totalComments] = useState(23367);
  const [isPickingWinner, setIsPickingWinner] = useState(false);
  const [winners, setWinners] = useState([]);
  const [substitutes, setSubstitutes] = useState([]);
  const [countingComplete, setCountingComplete] = useState(false);
  const [countingStarted, setCountingStarted] = useState(false);
  const [countSpeed, setCountSpeed] = useState(50); // ms per increment
  const [winnerCount, setWinnerCount] = useState(4);
  const [showSubstitutes, setShowSubstitutes] = useState(false);

  // Auto-pick winners when counting is complete
  useEffect(() => {
    if (countingComplete && !isPickingWinner && winners.length === 0) {
      pickWinners();
    }
  }, [countingComplete, isPickingWinner, winners.length]);

  // Start counting comments
  function startCounting() {
    if (countingStarted) return;
    
    setCountingStarted(true);
    setCommentCount(0);
    setWinners([]);
    setSubstitutes([]);
    setShowSubstitutes(false);
    setCountingComplete(false);
    
    const interval = setInterval(() => {
      setCommentCount(prevCount => {
        // Increase by a random amount between 1-5
        const increment = Math.floor(Math.random() * 5) + 1;
        const nextCount = prevCount + increment;
        
        // Check if we've reached the total
        if (nextCount >= totalComments) {
          clearInterval(interval);
          setCountingComplete(true);
          return totalComments;
        }
        
        return nextCount;
      });
    }, countSpeed);
  }

  // Function to pick winners
  function pickWinners() {
    if (!countingComplete) return;
    
    setIsPickingWinner(true);
    setShowSubstitutes(false);
    
    // Simulate picking animation
    setTimeout(() => {
      // Shuffle the final winners array
      const shuffledWinners = [...finalWinners].sort(() => 0.5 - Math.random());
      const shuffledSubstitutes = [...substituteWinners].sort(() => 0.5 - Math.random());
      
      // Take the first n winners based on winnerCount
      const selectedWinners = shuffledWinners.slice(0, Math.min(winnerCount, finalWinners.length));
      const selectedSubstitutes = shuffledSubstitutes.slice(0, Math.min(5, substituteWinners.length));
      
      setWinners(selectedWinners);
      setSubstitutes(selectedSubstitutes);
      setIsPickingWinner(false);
    }, 2000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Instagram post preview & Controls */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Instagram Giveaway Reel</h2>
            <InstagramPostPreview reelUrl={reelUrl} />
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold mb-4">Giveaway Settings</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="winner-count">
                  Number of Winners
                </label>
                <input 
                  type="number" 
                  id="winner-count"
                  min="1" 
                  max="5"
                  value={winnerCount}
                  onChange={(e) => setWinnerCount(Math.max(1, Math.min(5, parseInt(e.target.value) || 1)))}
                  className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="count-speed">
                  Counting Speed (lower is faster)
                </label>
                <input 
                  type="range" 
                  id="count-speed"
                  min="5" 
                  max="200"
                  value={countSpeed}
                  onChange={(e) => setCountSpeed(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              {!countingStarted && (
                <button 
                  type="button"
                  className="w-full rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onClick={startCounting}
                >
                  Start Counting Comments
                </button>
              )}
              
              {countingStarted && !countingComplete && (
                <button 
                  type="button"
                  className="w-full rounded-md bg-gray-200 dark:bg-gray-700 px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-300 shadow-sm cursor-wait"
                  disabled
                >
                  Counting in progress...
                </button>
              )}
              
              {countingComplete && (
                <button 
                  type="button"
                  className="w-full rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                  disabled={true}
                >
                  {isPickingWinner ? 'Selecting Winners...' : 'Winners Selected Automatically'}
                </button>
              )}
            </div>
          </div>
          
          {/* Right column - Comment Counter & Winners */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Instagram Comments</h2>
            
            {/* Comment Counter */}
            <CommentCounter 
              currentCount={commentCount} 
              totalCount={totalComments} 
            />
            
            {/* Winners Section */}
            {winners.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <span>🏆 Winners</span>
                    <span className="text-sm font-normal bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                      {winners.length} selected
                    </span>
                  </h2>
                  {substitutes.length > 0 && (
                    <button
                      type="button"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      onClick={() => setShowSubstitutes(!showSubstitutes)}
                    >
                      {showSubstitutes ? 'Hide Substitutes' : 'Show Substitutes'}
                    </button>
                  )}
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col gap-1">
                    {winners.map((username, index) => (
                      <WinnerItem key={`winner-${index}`} username={username} />
                    ))}
                    
                    {showSubstitutes && substitutes.map((username, index) => (
                      <WinnerItem key={`substitute-${index}`} username={username} isSubstitute={true} />
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">
                    🎉 Congratulations to the Winners!
                  </h3>
                  <p className="text-green-700 dark:text-green-300 mb-2">
                    Thank you to all {totalComments} participants for entering our giveaway.
                  </p>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    <span className="font-semibold">Reel:</span> {reelUrl}
                  </p>
                </div>
              </div>
            )}
            
            {/* Instructions when no winners yet */}
            {winners.length === 0 && countingStarted && (
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
                  {countingComplete 
                    ? "Selecting winners..." 
                    : "Counting comments..."}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {countingComplete 
                    ? "All comments have been counted. Winners are being selected automatically!" 
                    : "Please wait while we count all the comments on this post."}
                </p>
              </div>
            )}
            
            {/* Instructions when not started */}
            {!countingStarted && (
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
                  How to use
                </h3>
                <ol className="list-decimal pl-5 text-blue-700 dark:text-blue-300 space-y-2">
                  <li>Click "Start Counting Comments" to begin scanning for comments</li>
                  <li>Wait until all 23367 comments are counted</li>
                  <li>Use the "Number of Winners" control to select how many winners you want (1-5)</li>
                  <li>Click "Pick Random Winners" to select from our 5 finalists</li>
                  <li>Toggle "Show Substitutes" to see the 5 substitute winners</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>Instagram Comment Picker - For demonstration purposes only</p>
        <p className="mt-1">Not affiliated with Instagram or Meta</p>
      </footer>
    </div>
  );
} 