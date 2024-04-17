const process = require('process');
// const fetch = require('node-fetch');

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL

const handler = async (event) => {

  const body = JSON.parse(event.body)

  const descriptor = {
    from: `"${body.email}" <no-reply@email.civeloo.com>`,
    to: CONTACT_EMAIL,
    subject: `${body.name} sent you a message from civeloo.com`,
    text: body.details,
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(descriptor),
  });

  console.log('res',res)

  if (res.ok) {
    const data = await res.json();

    return {
      statusCode: 200,
      body: data,
    };
  }
};

module.exports = { handler };