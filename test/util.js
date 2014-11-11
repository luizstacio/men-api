function dataEquals (mock, data) {
  var keys = Object.keys(mock);

  return !keys.filter(function(key){
    return !(mock[key] == data[key]);
  }).length;
}

module.exports = {
  dataEquals: dataEquals
}