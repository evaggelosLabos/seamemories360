export default function FeatureCard({ title, text }) {
  return (
    <article style={{
      background:'#fff', border:'1px solid #eee', borderRadius:12, padding:16,
      boxShadow:'0 6px 20px rgba(0,0,0,0.06)'
    }}>
      <h4 style={{margin:'0 0 6px 0'}}>{title}</h4>
      <p style={{margin:0, color:'#555'}}>{text}</p>
    </article>
  );
}
