module.exports = function(err, data, res){
  res.send( err ? { erro: err  } : { data: data } );
}