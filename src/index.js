const fs = require('fs');

const HOST_DATA = require('../data/hosts.js');
const PREFIX_DATA = require('../data/prefixes.js');

exports.getHostInfo = (url) => {
    const _url = url.toLowerCase().trim();

    for (const hostInfo of HOST_DATA) {
        const _rssPattern = hostInfo['rss-pattern'] ? hostInfo['rss-pattern'] : hostInfo['pattern'];
        
        if (_url.includes(_rssPattern)) {
            return hostInfo;
        }
    }

    return null
}

exports.getPrefixInfo = (url) => {
    const _url = url.toLowerCase().trim();

    return PREFIX_DATA
        .filter(prefixData => _url.includes(prefixData.prefixpattern));
}