import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
    const filtered = articles.filter((article) => article.id === id)