//
// Model Log
//
module.exports = function initLogModel(libs, models) {
  var logSchema = new libs.mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    hostname: {
      type: String,
      required: true,
    },
    pid: {
      type: Number,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    header: {
      type: Object,
    },
    data: {
      type: Object,
    },
    msg: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
  });
  models.log = libs.mongoose.model('log', logSchema);
};