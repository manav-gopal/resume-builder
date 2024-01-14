// auth.middleware.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from 'src/helpers/utils/authUtils'; // Import your token verification function

export const authenticateToken = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  const token = req.cookies.access_token; // Access the token from cookies

  if (!token) {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
    return;
  }

  try {
    const decoded = verifyToken(token); // Verify the token
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Unauthorized: Invalid token' });
  }
};
