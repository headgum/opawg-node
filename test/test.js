import assert from 'assert';

import {
    getHostInfo,
    getPrefixInfo
} from '../src/index.js';

describe('getHostInfo()', function () {
    it('should return host info for correct url', function () {
        const hostInfo = getHostInfo('https://www.omnycontent.com/d/playlist/77bedd50-a734-42aa-9c08-ad86013ca0f9/14438da9-558a-4ee2-9135-ad8e00f9db40/4b7eb63a-16e6-485c-89d7-ad8e00f9db57/podcast.rss');

        assert.equal(hostInfo.hostname, 'Omny Studio');
    });

    it('should return null info for unknown url', function () {
        const hostInfo = getHostInfo('https://www.google.com');

        assert.equal(hostInfo, null);
    });
});

describe('getPrefixInfo()', function () {
    it('should match multiple prefix providers', function () {
        const prefixes = getPrefixInfo('https://chtbl.com/track/89ED1D/pdst.fm/e/traffic.omny.fm/d/clips/77bedd50-a734-42aa-9c08-ad86013ca0f9/14438da9-558a-4ee2-9135-ad8e00f9db40/e521224a-f8ff-4c78-a735-ae7800223f35/audio.mp3?utm_source=Podcast&in_playlist=4b7eb63a-16e6-485c-89d7-ad8e00f9db57');

        assert.equal(prefixes[0].prefixname, 'Chartable');
        assert.equal(prefixes[1].prefixname, 'Podsights');
    })
});