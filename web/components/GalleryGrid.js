import Image from 'next/image';

export default function GalleryGrid() {
  return (
    <section style={{padding:'40px 20px', maxWidth:1200, margin:'0 auto'}}>
      <h2 style={{textAlign:'center', marginBottom:20}}>Moments from the Deep</h2>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))'}}>
        {[1,2].map(i => (
          <div key={i} style={{position:'relative', width:'100%', aspectRatio:'4/3', borderRadius:12, overflow:'hidden'}}>
            <Image src={`/images/gallery-${i}.jpg`} alt={`Underwater ${i}`} fill style={{objectFit:'cover'}} />
          </div>
        ))}
      </div>
    </section>
  );
}
