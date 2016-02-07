var BookSchema = new mongoose.Schema({
  isbn: {
    type: Number,
    // 唯一索引
    unique: true
  },
  name: {
    type: String,
    // 辅助索引
    index: true
  }
});
