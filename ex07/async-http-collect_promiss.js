const http = require('http');
const bl = require('bl');

if (process.argv.length != 5)
	return (console.log('Invalid commandline arguments'));

function store_data(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.pipe(bl((err, data) => {
                if (err)
                {
                    reject(err.message);
                }
                console.log(data.toString());
                resolve();
            }));
        }).on("error", (err) => {
            reject(err.message);
        });
    });
};

try {
    store_data(process.argv[2])
    .then(store_data(process.argv[3]))
    .then(store_data(process.argv[4]));
} catch (e) {
  console.log(e.message);
}