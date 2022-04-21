import { readFileSync } from 'node:fs';

const HOST_DATA = JSON.parse(readFileSync('data/hosts.json'));
const PREFIX_DATA = JSON.parse(readFileSync('data/prefixes.json'))

export function getHostInfo(url) {
    const _url = url.toLowerCase().trim();

    for (const hostInfo of HOST_DATA) {
        const _rssPattern = hostInfo['rss-pattern'] ? hostInfo['rss-pattern'] : hostInfo['pattern'];
        
        if (_url.includes(_rssPattern)) {
            return hostInfo;
        }
    }

    return null
}

export function getPrefixInfo(url) {
    const _url = url.toLowerCase().trim();

    return PREFIX_DATA
        .filter(prefixData => _url.includes(prefixData.prefixpattern));
}