import Image from 'next/image';

export default function SeaScooterRental() {
  return (
    <section className="seascooter-rental">
      <div className="seascooter-copy">
        <p className="seascooter-kicker">New Corfu experience</p>
        <h2>Aqua Marina BlueDrive X Pro Sea Scooter Rental</h2>
        <p>
          Add more freedom to your Corfu experience, snorkeling session, or boat day with an
          easy-to-use Aqua Marina sea scooter. It is ideal for exploring calm
          coastal water, enjoying longer swims, and creating more dynamic
          underwater memories.
        </p>
        <div className="seascooter-points" aria-label="Sea scooter rental highlights">
          <span>Beach and boat-day friendly</span>
          <span>Great for snorkeling videos</span>
          <span>Available in Corfu</span>
        </div>
        <a
          className="seascooter-cta"
          href="https://wa.me/306945474102?text=Hi%20Sea%20Memories%20360%2C%20I%27d%20like%20to%20rent%20the%20Aqua%20Marina%20sea%20scooter%20in%20Corfu."
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask for sea scooter rental
        </a>
      </div>
      <div className="seascooter-media">
        <Image
          src="/images/aqua-marina-bluedrive-rental.png"
          alt="Aqua Marina BlueDrive X Pro sea scooter available to rent in Corfu"
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
