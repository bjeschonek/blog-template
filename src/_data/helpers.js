module.exports = {
    /**
     * Gets a random array of posts excluding the current post to provide additional content at the bottom of the page.
     * @param {Array} collection The 11ty collection to generate additional posts from
     * @param {Object} excludedContent The individual content to exclude from being generated (current post)
     * @param {Number} limit=3 How many random posts to get back
     * @param {Boolean} random=true Randomized by default
     * @returns {Array} The resulting collection of limited, potentially random content
     */
    getAdditionalPosts(collection, excludedContent, limit=3, random=true) {
        let filteredItems = collection.filter(x => x.url !== excludedContent.url);

        if (random) {
            let counter = filteredItems.length;

            while (counter > 0) {
                let index = Math.floor(Math.random() * counter);

                counter--;

                let temp = filteredItems[counter];

                filteredItems[counter] = filteredItems[index];
                filteredItems[index] = temp;
            }
        }

        if (limit > 0) {
            filteredItems = filteredItems.slice(0, limit);
        }

        return filteredItems;
    }
}