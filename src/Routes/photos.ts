import express from 'express';

const router = express.Router();
const photos_controller = require('../Controllers/controller');

router.get("/:rover_name/:camera_type/:sol/:page", photos_controller.getRoverPhotos);

module.exports = router;