import { PostRepository } from "../../../../../api/domain/PostRepository";

export default async function handler(req, res) {
        const {slug} = req.query;

        PostRepository.postLikeEvent(slug)
        .then(() => res.json({status: 200, message: "Updated view count."}))
        .catch(err => res.json({status: err.status, message: err.message}))
}