class Tweet {
    constructor(id) {
        this.id = id;
        this.time = Twitter.timestamp++;
        this.next = null;
    }
}

class User {
    constructor(id) {
        this.id = id;
        this.followed = new Set();
        this.follow(id);
        this.tweet_head = null;
    }
    follow(id) {
        this.followed.add(id);
    }
    unfollow(id) {
        this.followed.delete(id);
    }
    post(id) {
        const bird = new Tweet(id);
        bird.next = this.tweet_head;
        this.tweet_head = bird;
    }
}


class Twitter {
    timestamp = 0;
    constructor() {
        this.userMap = new Map();
    }
    postTweet(userId, tweetId) {
        if (!this.userMap.has(tweetId)) {
            const user = new User(userId);
            this.userMap.set(userId, user);
        }
        this.userMap.get(userId).post(tweetId)
        console.log(`User ${userId} posts a new tweet (id = ${tweetId})`)
    }
    getNewsFeed(userId) {
        const res = [];
        if (!this.userMap.has(userId)) return res;
        const users = this.userMap.get(userId).followed;
        const q = new PriorityQueue((a, b) => b.time - a.time);
        for (let user of users) {
            const tweet = this.userMap.get(user).tweet_head;
            if (tweet !== null) q.enqueue(tweet);
        }
        let n = 0;
        while (!q.isEmpty() && n < 10) {
            const tweet = q.dequeue();
            res.push(tweet.id);
            n++
            if (tweet !== null) q.enqueue(tweet.next);
        }
        return res;
    }
    follow(followerId, followeeId) {
        if (!this.userMap.has(followerId)) {
            const user = new User(followerId);
            this.userMap.set(followerId, u);
        }
        if (!this.userMap.has(followeeId)) {
            const user = new User(followeeId);
            this.userMap.set(followeeId, user);
        }
        this.userMap.get(followeeId).follow(followeeId);
    }
    unfollow(followerId, followeeId) {
        if (!this.userMap.has(followerId) || followerId === followeeId) return;
        this.userMap.get(followerId).unfollow(followeeId)
    }
}

// Priority Queue Implementation in javascript
class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    peek() {
        return this._heap[0];
    }
    enqueue(value) {
        this._heap.push(value);
        this._shiftUp();
    }
    dequeue() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > 0) this._swap(0, bottom);
        this._heap.pop()
        this._shiftDown();
        return poppedValue
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _shiftUp() {
        let node = this.size() - 1;
        while (node > 0 && this._greater(node, node - 1 >> 1)) {
            this._swap(node, node - 1 >> 1);
            node = node - 1 >> 1;
        }
    }
    _shiftDown() {
        let node = 0;
        while (
            (node * 2 + 1 < this.size() && this._greater(node * 2 + 1, node)) ||
            (node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node))
        ) {
            let maxChild = 
            node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node * 2 + 1)
            ? node * 2 + 2 : node * 2 + 1;
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

const tweet = new Twitter()
tweet.postTweet(1, 5)
tweet.getNewsFeed(1);
tweet.follow(1, 2);
tweet.postTweet(2, 6);
tweet.getNewsFeed(1)
tweet.unfollow(1, 2)
tweet.getNewsFeed(1)
