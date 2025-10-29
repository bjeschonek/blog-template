module.exports = {
    /**
     * Returns attributes based on whether the link is active or the parent of an active item.
     * @param {String} itemUrl The Link to check.
     * @param {String} pageUrl The page context.
     * @returns {String} Returns the additional attributes, or nothing.
     */
    getLinkActiveState(itemUrl, pageUrl) {
        let response = '';

        if (itemUrl == pageUrl) {
            response = ` aria-current="page"`;
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) == 0) {
            response += ` data-state="active"`;
        }

        return response;
    },
};