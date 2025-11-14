export default function limitPosts (posts, limit) {
    if (limit < 0) {
        return posts.slice(limit)
    }

    return posts.slice(0, limit);
};