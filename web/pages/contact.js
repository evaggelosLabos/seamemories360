import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus(data?.message || 'Sent. We’ll get back soon.');
      setForm({name:'', email:'', message:''});
    } catch {
      setStatus('Error. Please try again.');
    }
  }

  return (
    <>
      <Header />
      <main style={{maxWidth:700, margin:'0 auto', padding:'40px 20px'}}>
        <h1>Contact</h1>
        <form onSubmit={submit} style={{display:'grid', gap:12}}>
          <input placeholder="Name" required value={form.name}
                 onChange={e=>setForm({...form, name:e.target.value})}
                 style={{padding:'12px', border:'1px solid #ddd', borderRadius:8}} />
          <input placeholder="Email" type="email" required value={form.email}
                 onChange={e=>setForm({...form, email:e.target.value})}
                 style={{padding:'12px', border:'1px solid #ddd', borderRadius:8}} />
          <textarea placeholder="Message" rows={5} required value={form.message}
                    onChange={e=>setForm({...form, message:e.target.value})}
                    style={{padding:'12px', border:'1px solid #ddd', borderRadius:8}} />
          <button style={{padding:'12px 18px', borderRadius:8, border:'none', background:'#0ea5e9', color:'#fff', cursor:'pointer'}}>
            Send
          </button>
        </form>
        {status && <p style={{marginTop:10}}>{status}</p>}
      </main>
      <Footer />
    </>
  );
}
