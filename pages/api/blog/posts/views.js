import { PostRepository } from "../../../../api/domain/PostRepository";

export default async function handler(req, res) {
        const slug = req.body.slug;
        
        PostRepository.postViewEvent(slug)
        .then(() => res.status(200).json({message: "Updated view count."}))
        .catch(err => res.status(err.status).json({message: err.message}))
}