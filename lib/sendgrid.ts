import Sendgrid from '@sendgrid/mail';

export async function send(email: string, subject: string, message: string) {
  Sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

  const content = {
    to: email,
    from: 'admin@urth.systems',
    subject: `[Urth Systems] - ${subject}`,
    html: message
  }

  try {
    await Sendgrid.send(content)
  } catch (error) {
    console.log('ERROR', error)
  }
}

