import Friendships from './../controllers/Friendships';
import { Router } from 'express';
const router = Router();

// @POST root/f/add {id1, id2}
router.post('/add', async (req, res) => {
  res.send(await Friendships.add(req.body.id1, req.body.id2));
});

// @DELETE root/f/delete {id1, id2}
router.delete('/delete', async (req, res) => {
  res.send(await Friendships.remove(req.body.id1, req.body.id2));
})

export default router;