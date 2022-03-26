import { PostNotFoundError } from "../exceptions/PostNotFoundError";
import clientPromise from "../factory";

export class PostRepository {
    static async postLikeEvent(slug) {
        return new Promise(async function(resolve, reject) {
            const client = await clientPromise;
            const db = client.db("blog");

            db.collection("posts").updateOne({route: slug}, {$inc: {
                views: 1
            }}).then(res => {
                if(res.modifiedCount === 0) reject(new PostNotFoundError("Couldn't find matching post for view count update."));
                else resolve();
            });
        })
    }

    static async getPostBySlug(slug) {
        return new Promise(async function(resolve, reject) {
            const client = await clientPromise;
            const db = client.db("blog");
        
            db.collection("posts").findOne({route: slug}).then(res => {
                if(!res) reject(new PostNotFoundError("Couldn't find matching post for view count update."));
                else resolve(res);
            });
        })
    }
}