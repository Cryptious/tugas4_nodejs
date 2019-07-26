Siswa = require('./siswaModel');
exports.index = function(req, res){
  Siswa.get(function(err, siswa){
    if(err){
      res.json({
        status:"error",
        message: err,
      });
    }
    res.json({
      status:"success",
      message:"Data Siswa berhasil diterima",
      data: siswa
    });
  })
}

exports.new = function(req, res){
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tgllahir = req.body.tgllahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;

  siswa.save(function(err){
    res.json({
      message:"Siswa baru ditambahkan",
      data: siswa
    });
  });
};

exports.view = function(req, res){
  Siswa.findById(req.params.siswa_id, function(err, siswa){
    if(err)
      res.send(err);
    res.json({
      message:"Memuat Data Siswa ...",
      data: siswa
    });
  });
};

exports.update = function (req, res) {
Siswa.findById(req.params.siswa_id, function (err, siswa) {
       if (err)
           res.send(err);
         siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
         siswa.tgllahir = req.body.tgllahir;
         siswa.jeniskelamin = req.body.jeniskelamin;
         siswa.hobi = req.body.hobi;

       siswa.save(function (err) {
           if (err)
               res.json(err);
           res.json({
               message: 'CData siswa Terupdate',
               data: siswa
           });
       });
   });
};


exports.delete = function (req, res) {
   Siswa.remove({
       _id: req.params.siswa_id
   }, function (err, siswa) {
       if (err)
           res.send(err);
res.json({
           status: "success",
           message: 'Siswa dihapus'
       });
   });
};
