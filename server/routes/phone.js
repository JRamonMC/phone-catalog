const express = require('express');
const router = express.Router();
const {
  listPhones,
  createPhone,
  phoneImage,
  deletePhone,
  phoneById,
  getPhone
} = require("./../controllers/phoneController");


router.get('/all', listPhones);
router.get('/detail/:phoneId', getPhone);
router.post('/new', createPhone);
router.get('/phoneimage/:phoneId', phoneImage);
router.delete('/:phoneId', deletePhone);
router.param("phoneId", phoneById);

module.exports = router;