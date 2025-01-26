export async function onRequestPost(request, env, ctx) {
    const RESEND_API_KEY = env.RESEND_API_KEY;
    const CONTACT_EMAIL = env.CONTACT_EMAIL;
    const RESEND_URL = env.RESEND_URL;
    const body = await request.json();
    const email = body?.email;
    if (!email) {
      return new Response(JSON.stringify({ statusCode: 400, body: 'Missing email' }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const subject = body?.subject || '';
    const text = body?.text || '';
    const uuid = crypto.randomUUID();

    const descriptor = {
      from: `"${email}" <no-reply@email.civeloo.com>`,
      to: CONTACT_EMAIL,
      subject: subject,
      text: text,
    }

    let response = "";
    let data = "";

    try {
      const res = await fetch(RESEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'X-Entity-Ref-ID': uuid,
        },
        body: JSON.stringify(descriptor),
      });
      data = await res.json();
      response = { statusCode: 200, body: '' }
    } catch (error) {
      response = { statusCode: 500, body: error.message}
    }

    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' }
    });
};