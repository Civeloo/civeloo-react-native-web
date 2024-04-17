const process = require('process');

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

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(descriptor),
    });
    return { statusCode: 200, body: '' }
  } catch (error) {
    return { statusCode: 500, body: error.message }
  }
};

module.exports = { handler };