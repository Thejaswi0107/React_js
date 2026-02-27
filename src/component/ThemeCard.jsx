import { useState } from "react";
import "./ThemeCard.css";

function ThemeCard() {
  const [isDark, setIsDark] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <h2>Theme Toggle & Like Feature</h2>

      <button className="theme-btn" onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>

      {/* Sub-container */}
      <div className="sub-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/034/362/057/large_2x/wallpaper-the-sky-flowers-bird-lake-water-nature-birds-nature-ai-generated-free-photo.jpg"
          alt="Nature Landscape"
        />

        <div className="like-section" onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={liked ? "red" : "gray"}
            width="30"
            height="30"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
              4.5 2.09C13.09 3.81 14.76 3 16.5 3 
              19.58 3 22 5.42 22 8.5c0 3.78-3.4 
              6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ThemeCard;