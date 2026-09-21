import ServiceLanding from '../components/ServiceLanding';

export default function CorfuExperience() {
  return (
    <ServiceLanding
      title="Unique Corfu Experience at Sea | SeaMemories360"
      description="Book a unique Corfu sea experience with underwater video, snorkeling memories, sea scooter moments, and easy WhatsApp planning for visitors in Corfu."
      canonicalPath="/corfu-experience"
      keywords={['unique corfu experience', 'corfu sea experience', 'corfu experiences at sea', 'things to do in corfu', 'unique things to do in corfu', 'corfu water activities']}
      eyebrow="Unique Corfu sea experience"
      heading="Unique Corfu Experience at Sea"
      intro="SeaMemories360 turns a beach visit, boat stop, or snorkeling moment into a personal sea memory with underwater video, sea scooter action, and simple WhatsApp booking."
      imageAlt="Sea scooter and underwater video experience on the Corfu coastline"
      whatsappText="Hi Sea Memories 360, I'd like to book a unique Corfu sea experience."
      highlights={[
        { label: 'Corfu', title: 'Built for Sea Days', text: 'Made for beach visits, boat stops, calm coastal water, and the relaxed rhythm of a Corfu holiday.' },
        { label: 'Memory', title: 'More Than Photos', text: 'Underwater video and sea-level footage give visitors a memory that feels personal and easy to share.' },
        { label: 'Booking', title: 'Simple to Arrange', text: 'Ask for availability, location advice, and the right setup for your group directly through WhatsApp.' },
      ]}
      sections={[
        { title: 'What makes this Corfu experience different?', text: 'Most visitors leave Corfu with phone photos from the beach. SeaMemories360 creates a sea-based memory with underwater video, snorkeling moments, underwater selfies, and optional Aqua Marina sea scooter use.' },
        { title: 'Who is this experience for?', text: 'It fits couples, families, solo travelers, boat guests, villa guests, hotel visitors, and anyone searching for a unique thing to do in Corfu without joining a large tour.' },
        { title: 'How the experience works', text: 'Send a WhatsApp message with your date, group size, and where you will be in Corfu. We help shape the right sea memory around your beach day, boat day, or snorkeling plan.' },
      ]}
      faq={[
        { question: 'What is a unique Corfu sea experience with SeaMemories360?', answer: 'It is a personalized sea memory for visitors in Corfu, combining underwater video, snorkeling moments, underwater selfies, and optional sea scooter rental.' },
        { question: 'Is this a good thing to do in Corfu for couples or families?', answer: 'Yes. The experience is designed for couples, families, friends, solo travelers, and boat guests who want something memorable without needing diving experience.' },
        { question: 'Where in Corfu can I book the experience?', answer: 'The experience is planned around suitable coastal areas, beach days, snorkeling stops, and boat trips in Corfu, depending on weather and sea conditions.' },
        { question: 'How do I book a Corfu sea experience?', answer: 'The fastest way to book is through WhatsApp. Send your preferred date, group size, location, and whether you want underwater video, sea scooter rental, or both.' },
      ]}
    />
  );
}
