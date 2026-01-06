(async () => {
  try {
    const fetch = (await import('node-fetch')).default;
    const res = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Integration Test', email: 'test@example.com', phone: '000', city: 'Chennai' }),
    });
    const text = await res.text();
    console.log('STATUS', res.status);
    console.log('BODY', text);
  } catch (err) {
    console.error('ERROR', err);
  }
})();