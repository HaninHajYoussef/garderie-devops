export default async function handler(req, res) {
  const base = process.env.BACKEND_URL || 'http://localhost:5000';
  const path = [].concat(req.query.path).join('/');
  try {
    const r = await fetch(`${base}/api/${path}`);
    const data = await r.json();
    res.status(r.status).json(data);
  } catch (e) {
    res.status(502).json({ error: 'Backend indisponible' });
  }
}
