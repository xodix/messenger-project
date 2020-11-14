import Group from './../controllers/Group';
import { Router } from 'express';
const router = Router();

// @POST root/g/get {userId}
router.post('/get', async (req, res) => {
  try {
    res.json(await Group.get(req.body.userId));
  } catch (error) {
    res.json(error.message);
  }
});

// @POST root/g/add {name, participants}
router.post('/add', async (req, res) => {
  try {
    res.json(await Group.add(req.body.name, req.body.participants));
  } catch (error) {
    res.json(error.message);
  }
});

// @DELETE root/g/delete {groupId, adminId}
router.delete('/delete', async (req, res) => {
  try {
    res.json(await Group.remove(req.body.groupId, req.body.adminId));
  } catch (error) {
    res.json(error.message);
  }
});

// @POST root/g/addAdmin {groupId, adminId, newAdminId}
router.post('/addAdmin', async (req, res) => {
  try {
    res.json(await Group.addAdmin(req.body.groupId, req.body.adminId, req.body.newAdminId));
  } catch (error) {
    res.json(error.message);
  }
});

// @DELETE root/g/deleteAdmin {groupId, adminId, exAdminId}
router.delete('/deleteAdmin', async (req, res) => {
  try {
    res.json(await Group.removeAdmin(req.body.groupId, req.body.adminId, req.body.exAdminId));
  } catch (error) {
    res.json(error.message);
  }
});

// @POST root/g/addParticipant {groupId, participantId, newParticipantId}
router.post('/addParticipant', async (req, res) => {
  try {
    res.json(await Group.addParticipant(req.body.groupId, req.body.participantId, req.body.newParticipantId));
  } catch (error) {
    res.json(error.message);
  }
});

// @DELETE root/g/removeParticipant {groupId, adminId, exParticipantId}
router.delete('/deleteParticipant', async (req, res) => {
  try {
    res.json(await Group.removeParticipant(req.body.groupId, req.body.adminId, req.body.exParticipantId));
  } catch (error) {
    res.json(error.message);
  }
});

export default router;