const router = require("express").Router();
const VerifyToken = require('../../middleware/verify_token')

const payrollController = require('../../controllers/payroll')

router.get('/all', VerifyToken, payrollController.get_all)
router.get('/:id', VerifyToken, payrollController.get_id)
router.post('/', VerifyToken, payrollController.create)
router.patch('/:id', VerifyToken, payrollController.update)
router.delete('/:id', VerifyToken, payrollController.delete)

module.exports = router;