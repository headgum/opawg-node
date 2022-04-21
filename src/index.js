import HOST_DATA from '../data/hosts.json' assert { type: 'json' };
import PREFIX_DATA from '../data/prefixes.json' assert { type: 'json' };

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