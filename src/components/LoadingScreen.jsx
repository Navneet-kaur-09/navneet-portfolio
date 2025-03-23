import { useEffect, useState, useRef } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");

  // Array of random phrases
  const phrases = [
    "Hi there! Welcome to my code zone-expect some bugs and occasional brilliance!💻🦠",
    "Hi there! This profile is running in 'Development Mode'... Expect a few glitches! ⚡💻" ,
    "Hi there! My code is better than my jokes.😅",
    "Welcome! Let’s debug this together.🛠️",
    "Hi there! This profile is still compiling...⌛",
    "Welcome! I promise I’m better than my Git commit messages.😅",
    "Welcome! Warning: May contain random thoughts and semicolons.😉",
    "Welcome! I guarantee I’m better at handling exceptions in code than in conversations.⚡",
    "I'm better at catching bugs than catching up with friends.🐞",
    "Welcome! Please ignore 404 in this person's personality, (if any😉)."
  ];

  // Function to get a random phrase
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };
  //const fullText = getRandomPhrase(); // Get a random phrase each time
  

  useEffect(() => { 
    // Set the random phrase to the state
    const randomPhrase = getRandomPhrase();
    setFullText(randomPhrase);

    let index = 0;
    const interval = setInterval(() => {
      setText(randomPhrase.substring(0, index));
      index++;

      if (index > randomPhrase.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
