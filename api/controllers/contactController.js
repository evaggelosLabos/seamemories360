export async function postContact(req, res) {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' });
  console.log('[CONTACT]', { name, email, message, ts: new Date().toISOString() });
  return res.json({ message: 'Thanks! We will get back to you.' });
}

export async function subscribe(req, res) {
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ message: 'Email required' });
  console.log('[SUBSCRIBE]', { email, ts: new Date().toISOString() });
  return res.json({ message: 'Welcome aboard! You are on the list.' });
}
