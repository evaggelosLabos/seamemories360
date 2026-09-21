import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/experiences', label: 'Experiences' },
  { href: '/snorkeling-in-corfu', label: 'Snorkeling' },
  { href: '/sea-scooter-rental-corfu', label: 'Sea Scooter' },
  { href: '/underwater-experience-corfu', label: 'Underwater Video' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link href="/" className="brand-link" aria-label="Sea Memories 360 home">
          <span className="brand-mark">
            <Image
              src="/images/SeaMemories360logo.png"
              alt="Sea Memories 360 logo"
              width={58}
              height={58}
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>Sea Memories 360</strong>
            <span>Corfu underwater moments</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          className="header-cta"
          href="https://wa.me/306945474102?text=Hi%20Sea%20Memories%20360%2C%20I%27d%20like%20to%20ask%20about%20a%20Corfu%20sea%20experience."
          target="_blank"
          rel="noopener noreferrer"
        >
          Book on WhatsApp
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/306945474102?text=Hi%20Sea%20Memories%20360%2C%20I%27d%20like%20to%20ask%20about%20a%20Corfu%20sea%20experience."
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </a>
          </nav>
        )}
      </div>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 12px 18px;
          border-bottom: 1px solid rgba(6, 47, 61, 0.08);
          background: rgba(248, 252, 255, 0.9);
          backdrop-filter: blur(18px);
          box-shadow: 0 12px 30px rgba(6, 47, 61, 0.08);
        }

        .header-shell {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          gap: 22px;
          align-items: center;
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .brand-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          min-width: 230px;
          color: #062f3d;
          text-decoration: none;
        }

        .brand-mark {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          overflow: hidden;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 10px 24px rgba(2, 78, 118, 0.12);
        }

        .brand-mark :global(img) {
          width: 58px;
          height: 58px;
          object-fit: contain;
        }

        .brand-copy {
          display: grid;
          gap: 2px;
        }

        .brand-copy strong {
          font-size: 17px;
          line-height: 1.1;
        }

        .brand-copy span {
          color: #4d7883;
          font-size: 12px;
          font-weight: 700;
        }

        .desktop-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          min-width: 0;
          padding: 7px;
          border: 1px solid rgba(2, 78, 118, 0.1);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.74);
        }

        .desktop-nav :global(a) {
          display: inline-flex;
          align-items: center;
          min-height: 36px;
          padding: 0 12px;
          border-radius: 999px;
          color: #164855;
          font-size: 13px;
          font-weight: 800;
          line-height: 1;
          text-decoration: none;
          transition: background 160ms ease, color 160ms ease, transform 160ms ease;
          white-space: nowrap;
        }

        .desktop-nav :global(a:hover),
        .desktop-nav :global(a:focus-visible) {
          background: #e6f6fb;
          color: #023449;
          transform: translateY(-1px);
        }

        .header-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 999px;
          background: #023449;
          color: #fff;
          font-size: 13px;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(2, 52, 73, 0.2);
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
          white-space: nowrap;
        }

        .header-cta:hover,
        .header-cta:focus-visible {
          background: #0a7d68;
          box-shadow: 0 16px 34px rgba(10, 125, 104, 0.22);
          transform: translateY(-1px);
        }

        .mobile-menu-button {
          display: none;
          width: 46px;
          height: 46px;
          border: 1px solid rgba(2, 78, 118, 0.14);
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          place-items: center;
          box-shadow: 0 10px 24px rgba(2, 78, 118, 0.1);
        }

        .mobile-menu-button span {
          display: block;
          width: 20px;
          height: 2px;
          margin: 3px 0;
          border-radius: 999px;
          background: #062f3d;
        }

        .mobile-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          display: grid;
          gap: 6px;
          width: min(320px, calc(100vw - 36px));
          padding: 12px;
          border: 1px solid rgba(2, 78, 118, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 20px 46px rgba(6, 47, 61, 0.16);
        }

        .mobile-menu :global(a) {
          padding: 12px 14px;
          border-radius: 8px;
          color: #164855;
          font-weight: 800;
          text-decoration: none;
        }

        .mobile-menu :global(a:last-child) {
          background: #023449;
          color: #fff;
          text-align: center;
        }

        @media (max-width: 1080px) {
          .header-shell {
            grid-template-columns: auto auto auto;
            justify-content: space-between;
          }

          .desktop-nav,
          .header-cta {
            display: none;
          }

          .mobile-menu-button {
            display: grid;
          }
        }

        @media (max-width: 560px) {
          .site-header {
            padding: 10px 14px;
          }

          .brand-link {
            min-width: 0;
          }

          .brand-mark {
            width: 52px;
            height: 52px;
          }

          .brand-mark :global(img) {
            width: 52px;
            height: 52px;
          }

          .brand-copy strong {
            font-size: 15px;
          }

          .brand-copy span {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
