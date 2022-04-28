const fs = require('fs');
const fetch = require('node-fetch');

const LISTS = [
    'https://raw.githubusercontent.com/opawg/podcast-hosts/master/src/hosts.json',
    'https://raw.githubusercontent.com/opawg/podcast-prefixes/master/src/prefixes.json'
]

for (const url of LISTS) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const name = url.split('/').pop().split('.')[0];
            const fileName = `data/${name}.js`;

            const outputStr = 'module.exports = ' + JSON.stringify(data, null, 2);
            fs.writeFileSync(fileName, outputStr);
        })
        .catch(err => console.error(err));
}