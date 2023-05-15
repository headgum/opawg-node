const fs = require('fs');

const HOST_DATA = require('../data/hosts.js');
const PREFIX_DATA = require('../data/prefixes.js');

exports.getHostInfo = (url) => {
    if (!url) {
        return null
    }

    const _url = url.toLowerCase().trim();

    for (const hostInfo of HOST_DATA) {
        if (hostInfo['rss-pattern'] && _url.includes(hostInfo['rss-pattern'])) {
            return hostInfo;
        }

        if (_url.includes(hostInfo['pattern'])) {
            return hostInfo;
        }
    }

    return null
}

exports.getPrefixInfo = (url) => {
    if (!url) {
        return null
    }

    const _url = url.toLowerCase().trim();

    return PREFIX_DATA
        .filter(prefixData => _url.includes(prefixData.prefixpattern));
}