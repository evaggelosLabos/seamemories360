export default function GalleryGrid() {
  return (
    <section style={{ padding: '56px 20px', maxWidth: 1100, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Moments from the Deep</h2>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderRadius: 8,
          background: '#00131f',
          boxShadow: '0 18px 45px rgba(0, 35, 56, 0.18)',
        }}
      >
        <video
          autoPlay
          controls
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/fisheswithseascooter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
