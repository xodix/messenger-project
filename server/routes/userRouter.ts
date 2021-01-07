import { Router } from 'express';
const router = Router();
import User from './../controllers/User';

// *@POST root/u/login {email, password}
router.post('/login', async (req, res) => {
  try {
    res.status(200).json(await User.exists(req.body.email, req.body.password));
  } catch (error) {
    res.status(400).json(error);
  }
});

// *@POST root/u/register {email, userName, password, repeat}
router.post('/register', async (req, res) => {
  try {
    res.status(200).json(await User.add(req.body.email, req.body.password, req.body.userName));
  } catch (error) {
    res.status(400).json(error);
  }
});

// *@POST root/u/changePassword {email, password, repeat}
router.post('/changePassword', async (req, res) => {
  try {
    res.status(200).json(await User.changePassword(req.body.email, req.body.password, req.body.new));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@DELETE root/u/delete {email, password}
router.delete('/delete', async (req, res) => {
  try {
    res.status(200).json(await User.remove(req.body.email, req.body.password));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;