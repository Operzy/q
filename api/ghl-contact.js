export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name = '', email = '', phone = '' } = req.body || {};

  if (!email && !phone) {
    return res.status(400).json({ error: 'email or phone required' });
  }

  const token = process.env.GHL_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error('Missing GHL_TOKEN or GHL_LOCATION_ID env var');
    return res.status(500).json({ error: 'Server not configured' });
  }

  const parts = name.trim().split(/\s+/);
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ');

  try {
    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName: lastName || undefined,
        email: email || undefined,
        phone: phone || undefined,
        source: 'Mini-Course Opt-In',
        tags: ['mini-course-optin'],
      }),
    });

    const data = await ghlRes.json().catch(() => ({}));

    if (!ghlRes.ok) {
      console.error('GHL error', ghlRes.status, data);
      return res.status(502).json({ error: 'Upstream error', status: ghlRes.status, detail: data });
    }

    return res.status(200).json({ ok: true, contactId: data?.contact?.id, new: data?.new });
  } catch (err) {
    console.error('GHL request failed', err);
    return res.status(500).json({ error: 'Request failed' });
  }
}
