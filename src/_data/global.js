// Creates a random string of digits to be used as an asset hash on pages everytime page builds
module.exports = {
    randomHash() {
        function segment() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return `${segment()}-${segment()}-${segment()}`;
    },
};