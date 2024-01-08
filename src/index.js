const fs = require('fs');

const HOST_DATA = require('../data/hosts.js');
const PREFIX_DATA = require('../data/prefixes.js');

exports.getHostInfo = (url) => {
    if (!url) {
        return null
    }

    const _url = url.toLowerCase().trim();

    for (const hostInfo of HOST_DATA) {
        // First, match the host pattern
        if (url.includes(hostInfo['pattern'])) {

            // If there is a rss-pattern, match that too. rss-pattern is an optional field that can be used to narrow down the host pattern
            // https://github.com/opawg/podcast-hosts/blob/55200255683318921d3a368921ee953cb9c865d3/README.md?plain=1#L38
            if (hostInfo['rss-pattern']) {
                if (url.includes(hostInfo['rss-pattern'])) {
                    return hostInfo
                }
                
                // An rss-pattern exists but does not match
                return null
            }

            // No rss-pattern, but the host pattern matched
            return hostInfo
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