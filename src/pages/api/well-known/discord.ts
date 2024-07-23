import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('dh=19250262357e57ca642d86680ac9a2b8c72f6dec');
}
