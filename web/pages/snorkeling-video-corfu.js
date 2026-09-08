import ServiceLanding from '../components/ServiceLanding';

export default function SnorkelingVideoCorfu() {
  return (
    <ServiceLanding
      title="Snorkeling Video Corfu | Underwater Holiday Memories"
      description="Book snorkeling video in Corfu with SeaMemories360 and turn your swim, reef stop, boat day, or sea scooter session into a shareable underwater memory."
      canonicalPath="/snorkeling-video-corfu"
      keywords={['snorkeling video corfu', 'snorkeling videos corfu', 'snorkeling memories corfu', 'snorkeling experience corfu', 'underwater video corfu', 'corfu snorkeling experience']}
      eyebrow="Snorkeling video Corfu"
      heading="Snorkeling Video in Corfu"
      intro="Turn your snorkeling session into a cinematic Corfu memory with underwater footage, clear sea moments, and optional sea scooter rental."
      imageAlt="Snorkeling video experience in Corfu with Aqua Marina sea scooter"
      whatsappText="Hi Sea Memories 360, I'd like to ask about snorkeling video in Corfu."
      highlights={[
        { label: 'Water', title: 'Made for Snorkeling', text: 'Built for calm coastal water, reef stops, boat trips, and relaxed swimming.' },
        { label: 'Memory', title: 'Easy to Share', text: 'A better way to remember the experience than only phone photos from the beach.' },
        { label: 'Add-on', title: 'Sea Scooter Option', text: 'Use the Aqua Marina sea scooter to make the snorkeling footage more dynamic.' },
      ]}
      sections={[
        { title: 'Why snorkeling video?', text: 'Snorkeling is one of the most natural sea activities in Corfu, and video helps capture the movement, water, light, and feeling of the moment.' },
        { title: 'Perfect for boat stops', text: 'If you are already planning a boat day, a snorkeling video add-on can turn a normal swim stop into a highlight from the trip.' },
        { title: 'Simple booking', text: 'Message on WhatsApp with your date, location, and plans. We can suggest the best way to capture your snorkeling memory.' },
      ]}
      faq={[
        { question: 'Do you film snorkeling videos in Corfu?', answer: 'Yes. SeaMemories360 offers snorkeling video capture for visitors who want a polished underwater holiday memory.' },
        { question: 'Can beginners book this?', answer: 'Yes. The experience is designed for recreational snorkeling and relaxed swimming in suitable conditions.' },
        { question: 'Can I rent the sea scooter too?', answer: 'Yes. Sea scooter rental can be added to a snorkeling video session depending on availability.' },
      ]}
    />
  );
}
