import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        color: '#fff',
        backgroundColor: '#000',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
          backgroundColor: '#000',
        }}
      >
        <source src="/videos/natali_fixed.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.25)',
          zIndex: 1,
        }}
      />

      <div className="hero-text">
        <h1>Unique Corfu Experiences at Sea</h1>
        <p>Underwater videos, snorkeling memories, and sea scooter rentals in Corfu.</p>
      </div>

      <style jsx>{`
        .hero-text {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .hero-text h1 {
          font-size: clamp(22px, 4vw, 44px);
          margin-bottom: 10px;
        }

        .hero-text p {
          font-size: clamp(14px, 2vw, 18px);
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-video {
            object-fit: contain !important;
          }

          .hero-text {
            position: absolute;
            top: 8%;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            text-align: center;
            background: transparent;
          }

          .hero-text h1 {
            font-size: 18px;
          }

          .hero-text p {
            font-size: 14px;
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  );
}
