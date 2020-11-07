import Group from './../controllers/Group';
import { Router } from 'express';
const router = Router();

// @POST root/u/add {name, participants}
router.post('/add', async (req, res) => {
  res.json(await Group.add(req.body.name, req.body.participants));
});

// @DELETE root/u/delete {groupId, adminId}
router.delete('/delete', async (req, res) => {
  res.json(await Group.remove(req.body.groupId, req.body.adminId));
});

// @POST root/u/addAdmin {groupId, adminId, newAdminId}
router.post('/addAdmin', async (req, res) => {
  res.json(await Group.addAdmin(req.body.groupId, req.body.adminId, req.body.newAdminId));
});

// @DELETE root/u/deleteAdmin {groupId, adminId, exAdminId}
router.delete('/deleteAdmin', async (req, res) => {
  res.json(await Group.removeAdmin(req.body.groupId, req.body.adminId, req.body.exAdminId));
});

// @POST root/u/addParticipant {groupId, participantId, newParticipantId}
router.post('/addParticipant', async (req, res) => {
  res.json(await Group.addParticipant(req.body.groupId, req.body.participantId, req.body.newParticipantId));
});

// @DELETE root/u/removeParticipant {groupId, adminId, exParticipantId}
router.delete('/deleteParticipant', async (req, res) => {
  res.json(await Group.removeParticipant(req.body.groupId, req.body.adminId, req.body.exParticipantId));
});

export default router;