/**
 * Created by ngm on 2018/4/26.
 */
const fs = require('fs');

module.exports = ( callback ) => {

  console.info( 'testFile -------- ' );
  console.info( process.cwd() );
  fs.readFile('./build/public/image/map/circle.png', function (err,data){
    if(err){
      console.log(err);
    }else {
      console.log(data);
      console.log(data.length + ' bytes');
      var text = data.toString('utf-8'); // Buffer -> String
      console.log(text);
    }
  })

};