let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
      status: 'API Its Working',
      message: 'Selamat Data di Tugas 2 Node JS',
  });
});

var siswaController = require('./siswaController');

router.route('/siswa')
  .get(siswaController.index)
  .post(siswaController.new);
router.route('/siswa/:siswa_id')
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);


module.exports = router;
