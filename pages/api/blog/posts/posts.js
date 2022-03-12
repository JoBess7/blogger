import { PostRepository } from "../../../../api/domain/PostRepository";

export default async function handler(req, res) {
    PostRepository.getAllPosts()
    .then(data => res.json({status: 200, data: data}))
}