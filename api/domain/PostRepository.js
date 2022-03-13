import { PostNotFoundError } from "../exceptions/PostNotFoundError";
import clientPromise from "../factory";

export class PostRepository {
    static async postLikeEvent(slug) {
        const client = await clientPromise;
        const db = client.db("blog");
        
        return new Promise(function(resolve, reject) {
            db.collection("posts").updateOne({route: slug}, {$inc: {
                views: 1
            }}).then(res => {
                if(res.modifiedCount === 1) resolve();
                else reject(new PostNotFoundError("Couldn't find matching post for view count update."));
            });
        })
    }

    static async getPostBySlug(slug) {
        return new Promise(async function(resolve, reject) {
            const client = await clientPromise;
            const db = client.db("blog");
        
            db.collection("posts").findOne({route: slug}).then(res => {
                resolve(res);
            });
        })
    }
}