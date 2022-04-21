# opawg-node

Simple interface to check URLs against the OPAWG [podcast-host](https://github.com/opawg/podcast-hosts) and [podcast-prefixes](https://github.com/opawg/podcast-prefixes) lists. The list is updated whenever `npm build` runs. If you need more real time results, try [podcast-privacy.com](https://podcast-privacy.com/)'s API.

### Usage

 - `getHostInfo(<string>)`, returns a single entry from [podcast-host](https://github.com/opawg/podcast-hosts)
 - `getPrefixInfo(<string>)`, returns an array of matching prefix providers from [podcast-prefixes](https://github.com/opawg/podcast-prefixes)
