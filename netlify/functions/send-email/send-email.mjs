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
/*
  Response {
    [Symbol(realm)]: null,
    [Symbol(state)]: {
      aborted: false,
      rangeRequested: false,
      timingAllowPassed: true,
      requestIncludesCredentials: true,
      type: 'default',
      status: 200,
      timingInfo: {
        startTime: 235.59394400002202,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: 235.59394400002202,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 45,
        decodedBodySize: 45,
        finalConnectionTimingInfo: null
      },
      cacheState: '',
      statusText: 'OK',
      headersList: HeadersList {
        cookies: null,
        [Symbol(headers map)]: [Map],
        [Symbol(headers map sorted)]: null
      },
      urlList: [ [URL] ],
      body: { stream: undefined }
    },
    [Symbol(headers)]: HeadersList {
      cookies: null,
      [Symbol(headers map)]: Map(9) {
        'ratelimit-policy' => [Object],
        'ratelimit-limit' => [Object],
        'ratelimit-remaining' => [Object],
        'ratelimit-reset' => [Object],
        'content-type' => [Object],
        'content-length' => [Object],
        'etag' => [Object],
        'date' => [Object],
        'server' => [Object]
      },
      [Symbol(headers map sorted)]: null
    }
  }
  */
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(descriptor),
  });

  // console.log('res', res)

  // if (res.ok) {
  if (res) {
    const data = await res.json();
    console.log('data', data)
    return {
      statusCode: 200,
      body: data,
    };
  }
};

module.exports = { handler };