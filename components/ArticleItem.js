import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return (
        <Link href={`/article/${article.id}`}>
        <a className={articleStyles.card}>