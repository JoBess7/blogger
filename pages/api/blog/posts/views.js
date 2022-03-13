import { PostRepository } from "../../../../api/domain/PostRepository";

export default async function handler(req, res) {
        const slug = req.body.slug;

        PostRepository.postLikeEvent(slug)
        .then(() => res.status(200).json({status: 200, message: "Updated view count."}))
        .catch(err => res.status(err.status).json({status: err.status, message: err.message}))
}