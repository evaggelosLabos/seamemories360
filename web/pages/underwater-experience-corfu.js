import ServiceLanding from '../components/ServiceLanding';

export default function UnderwaterExperienceCorfu() {
  return (
    <ServiceLanding
      title="Underwater Photo & Video Experience Corfu | SeaMemories360"
      description="Book an underwater photo and video experience in Corfu with snorkeling memories, underwater selfies, sea scooter moments, and digital delivery."
      canonicalPath="/underwater-experience-corfu"
      keywords={['underwater experience corfu', 'underwater photo experience corfu', 'underwater video experience corfu', 'underwater photoshoot corfu', 'underwater selfies corfu', 'corfu underwater experience']}
      eyebrow="Underwater photo and video Corfu"
      heading="Underwater Photo and Video Experience in Corfu"
      intro="Capture your time below the surface with underwater photos, short video memories, snorkeling footage, and optional Aqua Marina sea scooter moments in Corfu."
      imageAlt="Underwater photo and video experience in Corfu with Aqua Marina sea scooter"
      whatsappText="Hi Sea Memories 360, I'd like to ask about an underwater photo and video experience in Corfu."
      highlights={[
        { label: 'Photo', title: 'Underwater Selfies', text: 'Made for visitors who want clear, playful underwater photos without needing a diving session.' },
        { label: 'Video', title: 'Short Sea Memories', text: 'Add cinematic underwater clips from your swim, snorkeling stop, boat day, or sea scooter moment.' },
        { label: 'Corfu', title: 'Easy Coastal Setup', text: 'Planned around suitable beaches, calm water, and simple visitor-friendly booking in Corfu.' },
      ]}
      sections={[
        { title: 'A more memorable underwater experience in Corfu', text: 'This is for travelers who want more than normal beach photos. The focus is the memory: underwater photos, short videos, snorkeling footage, and relaxed sea moments.' },
        { title: 'What can be included', text: 'Depending on your plans and conditions, the experience can include underwater selfies, underwater video, snorkeling clips, sea scooter footage, and digital delivery.' },
        { title: 'Different from diving or big tours', text: 'You do not need to be a diver or join a large group. The experience is simple, personal, and built around recreational swimming, snorkeling, and suitable shallow water.' },
      ]}
      faq={[
        { question: 'What is an underwater photo and video experience in Corfu?', answer: 'It is a visitor-friendly sea experience where your swim, snorkeling moment, or sea scooter session is captured as underwater photos and short video memories.' },
        { question: 'Can I book an underwater photoshoot in Corfu?', answer: 'Yes. SeaMemories360 can help create underwater selfies, photo moments, and short clips for couples, families, friends, and boat guests when conditions are suitable.' },
        { question: 'Do I need to be a diver?', answer: 'No. The experience is designed around recreational swimming, snorkeling, calm coastal water, and easy WhatsApp booking.' },
        { question: 'Can the sea scooter be included?', answer: 'Yes. The Aqua Marina sea scooter can be added when available, giving the underwater footage more movement and energy.' },
      ]}
    />
  );
}
