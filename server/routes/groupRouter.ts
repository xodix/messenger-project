import Group from './../controllers/Group';
import { Router } from 'express';
import auth from '../middleware/auth';
const router = Router();

// *@POST root/g/get {userId}
router.post('/get', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Group.get(req.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@POST root/g/add {name, participants}
router.post('/add', auth, async (req: any, res) => {
  try {
    const participants = [...req.body.participants, req.id]
    res.status(200).json(await Group.add(req.body.name, participants));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@DELETE root/g/delete {groupId, adminId}
router.delete('/delete', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Group.remove(req.body.groupId, req.id));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@POST root/g/addAdmin {groupId, adminId, newAdminId}
router.post('/addAdmin', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Group.addAdmin(req.body.groupId, req.id, req.body.newAdminId));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@DELETE root/g/deleteAdmin {groupId, adminId, exAdminId}
router.delete('/deleteAdmin', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Group.removeAdmin(req.body.groupId, req.id, req.body.exAdminId));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@POST root/g/addParticipant {groupId, participantId, newParticipantId}
router.post('/addParticipant', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Group.addParticipant(req.body.groupId, req.id, req.body.newParticipantId));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// *@DELETE root/g/removeParticipant {groupId, adminId, exParticipantId}
router.delete('/deleteParticipant', auth, async (req: any, res) => {
  try {
    res.status(200).json(await Group.removeParticipant(req.body.groupId, req.id, req.body.exParticipantId));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;