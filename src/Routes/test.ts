import express from 'express';
const router = express.Router();

const test_controller = require('../Controllers/controller');


router.get("/", test_controller.test);

module.exports = router;