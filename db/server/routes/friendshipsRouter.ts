import Friendships from './../controllers/Friendships';
import { Router } from 'express';
const router = Router();

// *@POST root/f/get {userId}
router.post('/get', async (req, res) => {
  try {
    res.json(await Friendships.get(req.body.userId));
  } catch (error) {
    res.json(error.message);
  }
});

// *@POST root/f/add {id1, id2}
router.post('/add', async (req, res) => {
  try {
    res.json(await Friendships.add(req.body.id1, req.body.id2));
  } catch (error) {
    res.json(error.message);
  }
});

// *@DELETE root/f/delete {id1, id2}
router.delete('/delete', async (req, res) => {
  try {
    res.json(await Friendships.remove(req.body.id1, req.body.id2));
  } catch (error) {
    res.json(error.message);
  }
})

export default router;