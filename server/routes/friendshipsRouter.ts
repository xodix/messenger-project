import Friendships from "./../controllers/Friendships";
import { Router } from "express";
const router = Router();
import auth from "./../middleware/auth";

// *@POST root/f/get {userId}
router.post("/get", auth, async (req: any, res) => {
  try {
    res.status(200).json(await Friendships.get(req.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@POST root/f/add {id1, id2}
router.post("/add", auth, async (req: any, res) => {
  try {
    res.status(200).json(await Friendships.add(req.id, req.body.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@DELETE root/f/delete {id1, id2}
router.delete("/delete", auth, async (req: any, res) => {
  try {
    res.status(200).json(await Friendships.remove(req.id, req.body.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;
