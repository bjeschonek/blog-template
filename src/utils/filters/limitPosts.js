module.exports = (posts, limit) => {
    if (limit < 0) {
        return posts.slice(limit)
    }

    return posts.slice(0, limit);
};