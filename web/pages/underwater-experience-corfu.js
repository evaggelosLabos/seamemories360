import ServiceLanding from '../components/ServiceLanding';

export default function UnderwaterExperienceCorfu() {
  return (
    <ServiceLanding
      title="Underwater Experience Corfu | SeaMemories360"
      description="Book an underwater experience in Corfu with SeaMemories360, including underwater videos, snorkeling memories, underwater selfies, and sea scooter options."
      canonicalPath="/underwater-experience-corfu"
      keywords={['underwater experience corfu', 'corfu underwater experience', 'underwater experiences corfu', 'unique underwater experience corfu', 'sea experience corfu', 'snorkeling experience corfu']}
      eyebrow="Underwater experience Corfu"
      heading="Underwater Experience in Corfu"
      intro="Discover a different side of Corfu with a sea experience built around underwater filming, snorkeling memories, and optional Aqua Marina sea scooter rental."
      imageAlt="Underwater experience in Corfu with Aqua Marina sea scooter rental"
      whatsappText="Hi Sea Memories 360, I'd like to ask about an underwater experience in Corfu."
      highlights={[
        { label: 'Sea', title: 'Coastal Corfu', text: 'Designed for beaches, boat stops, and clear shallow water around Corfu.' },
        { label: 'Memory', title: 'Photo and Video Feel', text: 'The focus is not only the activity, but the memory you take home from it.' },
        { label: 'Option', title: 'Sea Scooter Add-on', text: 'Add the Aqua Marina sea scooter when you want a more active underwater moment.' },
      ]}
      sections={[
        { title: 'A more memorable thing to do in Corfu', text: 'This underwater experience is for travelers who want something more personal than a normal beach visit and more flexible than a large tour.' },
        { title: 'What can be included', text: 'Depending on your plans, the experience can include underwater video, underwater selfies, snorkeling footage, sea scooter rental, and same-day digital delivery.' },
        { title: 'Best for visitors', text: 'It is a strong fit for couples, families, friends, solo travelers, boat guests, and hotel guests looking for a unique Corfu experience.' },
      ]}
      faq={[
        { question: 'What is an underwater experience in Corfu?', answer: 'It is a sea-based activity where your time swimming, snorkeling, or using a sea scooter is captured as a memorable underwater photo or video experience.' },
        { question: 'Do I need to be a diver?', answer: 'No. The experience is designed around recreational swimming, snorkeling, calm coastal water, and easy booking.' },
        { question: 'How do I ask for availability?', answer: 'Message SeaMemories360 on WhatsApp with your preferred date, location, and number of people.' },
      ]}
    />
  );
}
