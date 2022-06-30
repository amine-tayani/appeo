import { NextApiResponse, NextApiRequest } from 'next'
import geoip from 'geoip-lite'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let ip

  // grab client ip from the request headers
  if (req.headers['x-forwarded-for']) {
    ip = String(req.headers['x-forwarded-for']).split(',')[0]
  } else if (req.headers['x-real-ip']) {
    ip = req.connection.remoteAddress
  } else {
    ip = req.connection.remoteAddress
  }

  const country = geoip.lookup(ip)

  return res.status(200).json({
    geo: {
      clientIp: ip,
      clientCountry: country,
    },
  })
}
