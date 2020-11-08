import Group from './../controllers/Group';
import { Router } from 'express';
const router = Router();

// @GET root/g/get {userId}
router.get('/get', async (req, res) => {
  res.json(await Group.get(req.body.userId));
});

// @POST root/g/add {name, participants}
router.post('/add', async (req, res) => {
  res.json(await Group.add(req.body.name, req.body.participants));
});

// @DELETE root/g/delete {groupId, adminId}
router.delete('/delete', async (req, res) => {
  res.json(await Group.remove(req.body.groupId, req.body.adminId));
});

// @POST root/g/addAdmin {groupId, adminId, newAdminId}
router.post('/addAdmin', async (req, res) => {
  res.json(await Group.addAdmin(req.body.groupId, req.body.adminId, req.body.newAdminId));
});

// @DELETE root/g/deleteAdmin {groupId, adminId, exAdminId}
router.delete('/deleteAdmin', async (req, res) => {
  res.json(await Group.removeAdmin(req.body.groupId, req.body.adminId, req.body.exAdminId));
});

// @POST root/g/addParticipant {groupId, participantId, newParticipantId}
router.post('/addParticipant', async (req, res) => {
  res.json(await Group.addParticipant(req.body.groupId, req.body.participantId, req.body.newParticipantId));
});

// @DELETE root/g/removeParticipant {groupId, adminId, exParticipantId}
router.delete('/deleteParticipant', async (req, res) => {
  res.json(await Group.removeParticipant(req.body.groupId, req.body.adminId, req.body.exParticipantId));
});

export default router;