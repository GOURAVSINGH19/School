import { useState } from "react";
const GallerySection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="campus-visit-container">
      <div className="video-section">
        {showVideo ? (
          <div className="video-player">
            <p>Video would play here if available</p>
          </div>
        ) : (
          <>
            <div className="video-unavailable">
              <div className="error-icon">!</div>
              <div className="error-message">
                <h3>Video unavailable</h3>
                <p>
                  This video is no longer available because the YouTube account
                  associated with this video has been terminated.
                </p>
              </div>
            </div>
            <div className="youtube-logo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 22.9948 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z"
                  fill="white"
                />
                <path
                  d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z"
                  fill="#212121"
                />
              </svg>
            </div>
          </>
        )}
      </div>

      <div className="content-section fade-in">
        <h1 className="main-heading">
          VISIT OUR CAMPUS <br />
          WITH <span className="highlight">IMAGE GALLERY</span>
        </h1>
        <div className="divider"></div>

        <p className="description">
          Even slightly believable. If you are going use a passage of Lorem
          Ipsum need
        </p>

        <h2 className="sub-heading">OR WATCH WITH VIDEO</h2>

        <button className="play-button" onClick={handlePlayClick}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3L19 12L5 21V3Z"
              fill="#ff5722"
              stroke="#ff5722"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>PLAY NOW</span>
        </button>
      </div>
    </div>
  );
};

export default GallerySection;
