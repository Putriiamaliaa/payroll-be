const router = require("express").Router();
const authRoutes = require('../routes/auth');
const payrollhRoutes = require('../routes/payroll');

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json({
      message: `Server is running well - Server time : ${new Date()}`
  })
})

router.use('/auth', authRoutes);
router.use('/payroll', payrollhRoutes);

module.exports = router;
