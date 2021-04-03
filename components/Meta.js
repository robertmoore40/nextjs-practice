import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />