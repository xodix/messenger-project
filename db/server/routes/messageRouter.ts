import Message from './../controllers/Message';
import { Router } from 'express';
const router = Router();

// @POST root/m/add {userId, content, chatId}
router.post('/add', async (req, res) => {
  res.json(await Message.add(req.body.userId, req.body.content, req.body.chatId));
});

// @DELETE root/m/delete {messageId, userId}
router.delete('/delete', async (req, res) => {
  res.json(await Message.remove(req.body.messageId, req.body.userId));
});

// @POST root/m/edit {messageId, userId, content}
router.post('/edit', async (req, res) => {
  res.json(await Message.edit(req.body.messageId, req.body.userId, req.body.content));
});

export default router;