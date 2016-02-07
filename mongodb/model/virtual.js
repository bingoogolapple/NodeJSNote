var PersonSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

PersonSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

// 设置转换成JSON时，把虚拟属性也转换
PersonSchema.set('toJSON', {
  getters: true,
  virtual: true
});

var Person = mongoose.model('Person', PersonSchema);

var person = new Person({
  firstName: 'bingo',
  lastName: 'googol'
});

console.log('user fullName:', person.fullName);

console.log('JSON:', JSON.stringify(person));
