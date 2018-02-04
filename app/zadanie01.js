const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod
const crypto = require('crypto');

const codes = ['??TegoHasła','CodersLab', 'Node.js Szyfruje Pliki', 
'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];
const hashesFunction = ['sha256', 'sha512', 'md5', 'rmd160'];

codes.forEach(el => {
      hashesFunction.forEach(hashFunction => {
        if( crypto.createHmac(hashFunction, el).digest('hex') === MY_PWD_HASH){
            console.log(hashFunction,el);
        }
      });
    }); 