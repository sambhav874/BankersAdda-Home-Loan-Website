import { authMiddleware } from '../../../middleware/auth';

const handler = async (req, res) => {
  return new Response(JSON.stringify({ message: 'This is a protected route', user: req.user }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export default authMiddleware(handler);
