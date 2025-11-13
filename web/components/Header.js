import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0',

        height: '90px', // fixed height for consistent layout
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        background: '#fff',
        zIndex: 50,
      }}
    >
      {/* 🔹 Logo + Brand */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          height: '100%',
        }}
      >
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/SeaMemories360logo.png"
            alt="Sea Memories 360 logo"
            width={60}
            height={60}
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <span
          style={{
            fontWeight: 700,
            color: '#000',
            cursor: 'pointer',
            fontSize: '18px',
            whiteSpace: 'nowrap',
          }}
        >
          Sea Memories 360
        </span>
      </Link>

      {/* 🔹 Desktop Nav */}
      <nav
        style={{
          display: 'flex',
          gap: '16px',
          fontSize: '14px',
          alignItems: 'center',
        }}
        className="desktop-nav"
      >
        <Link href="/experiences" style={{ color: '#000', textDecoration: 'none' }}>Experiences</Link>
        <Link href="/about" style={{ color: '#000', textDecoration: 'none' }}>About</Link>
        <Link href="/partners" style={{ color: '#000', textDecoration: 'none' }}>Partners</Link>
        <Link href="/contact" style={{ color: '#000', textDecoration: 'none' }}>Contactu</Link>
      </nav>

      {/* 🔹 Hamburger for mobile */}
      <div
        style={{
          display: 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        className="mobile-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div style={{ width: 24, height: 2, background: '#000', margin: '4px 0' }} />
        <div style={{ width: 24, height: 2, background: '#000', margin: '4px 0' }} />
        <div style={{ width: 24, height: 2, background: '#000', margin: '4px 0' }} />
      </div>

      {/* 🔹 Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: '20px',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Link href="/experiences" style={{ color: '#000', textDecoration: 'none' }}>Experiences</Link>
          <Link href="/about" style={{ color: '#000', textDecoration: 'none' }}>About</Link>
          <Link href="/partners" style={{ color: '#000', textDecoration: 'none' }}>Partners</Link>
          <Link href="/contact" style={{ color: '#000', textDecoration: 'none' }}>Contact</Link>
        </div>
      )}

      {/* 🔹 Responsive logic */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-icon {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
