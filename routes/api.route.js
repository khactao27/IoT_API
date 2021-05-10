const express = require('express');
const sensorController = require('../controllers/sensor.controller');

const router = express.Router();

router.get('/sensors', sensorController.getAllSensor);
router.get('/sensors/:id', sensorController.getSensor);
router.post('/sensors', sensorController.addSensor);
router.put('/sensors/:id', sensorController.updateSensor);
router.delete('/sensors/:id', sensorController.deleteSensor);

module.exports = router;