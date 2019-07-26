var mongoose = require('mongoose');

var siswaSchema = mongoose.Schema({
  nama:{
    type: String,
    required: true
  },
  tgllahir:String,
  jeniskelamin: String,
  hobi:String
});

var Siswa = module.exports = mongoose.model('siswa', siswaSchema);
module.exports.get = function(callback, limit) {
  Siswa.find(callback).limit(limit);
}
