import express from 'express';

const router = express.Router();
const rover_controller = require('../Controllers/controller');

router.get("/", rover_controller.getRovers);

module.exports = router;