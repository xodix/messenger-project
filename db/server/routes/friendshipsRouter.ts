import Friendships from './../controllers/Friendships';
import { Router } from 'express';
const router = Router();

// @POST root/f/add {id1, id2} <- NIEDOKOŃCZONE
router.post('/add', (req, res) => {
  Friendships.add(req.body.id1, req.body.id2);
});

export default router;