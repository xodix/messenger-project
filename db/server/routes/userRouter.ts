import { Router } from 'express';
const router = Router();
import User from './../controllers/User';

// @POST root/u/login {email, password}
router.post('/login', async (req, res) => {
  res.json(await User.exists(req.body.email, req.body.password));
});

// @POST root/u/register {email, userName, password, repeat}
router.post('/register', async (req, res) => {
  res.json(await User.add(req.body.email, req.body.password, req.body.userName));
});

// @POST root/u/changePassword {email, password, repeat}
router.post('/changePassword', async (req, res) => {
  res.json(await User.changePassword(req.body.email, req.body.password, req.body.new));
});

// @DELETE root/u/delete {email, password}
router.delete('/delete', async (req, res) => {
  res.json(await User.remove(req.body.email, req.body.password));
});

export default router;