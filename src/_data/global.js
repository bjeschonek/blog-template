// Sets random string of digits to use on pages as an asset hash
module.exports = {
    random() {
        function segment() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return `${segment()}-${segment()}-${segment()}`;
    },
};