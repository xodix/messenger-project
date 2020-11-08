import Message from './../controllers/Message';
import { Router } from 'express';
const router = Router();

// @GET root/m/get {chatId}
router.get('/get', async (req, res) => {
  try {
    res.json(await Message.get(req.body.chatId));
  } catch (error) {
    res.json({ err: error });
  }
})

// @POST root/m/add {userId, content, chatId}
router.post('/add', async (req, res) => {
  try {
    res.json(await Message.add(req.body.userId, req.body.content, req.body.chatId));
  } catch (error) {
    res.json(error.message);
  }
});

// @DELETE root/m/delete {messageId, userId}
router.delete('/delete', async (req, res) => {
  try {
    res.json(await Message.remove(req.body.messageId, req.body.userId));
  } catch (error) {
    res.json(error.message);
  }
});

// @POST root/m/edit {messageId, userId, content}
router.post('/edit', async (req, res) => {
  try {
    res.json(await Message.edit(req.body.messageId, req.body.userId, req.body.content));
  } catch (error) {
    res.json(error.message);
  }
});

export default router;