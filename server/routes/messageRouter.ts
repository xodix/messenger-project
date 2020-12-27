import Message from './../controllers/Message';
import { Router } from 'express';
import auth from '../middleware/auth';
const router = Router();

// *@POST root/m/get {chatId}
router.post('/get', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Message.get(req.body.chatId));
  } catch (error) {
    res.status(400).json({ err: error });
  }
})

// *@POST root/m/add {userId, content, chatId}
router.post('/add', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Message.add(req.id, req.body.content, req.body.chatId));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@DELETE root/m/delete {messageId, userId}
router.delete('/delete', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Message.remove(req.body.messageId, req.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@POST root/m/edit {messageId, userId, content}
router.post('/edit', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Message.edit(req.body.messageId, req.id, req.body.content));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;