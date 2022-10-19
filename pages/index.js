import Head from 'next/head';
import { Fragment } from "react";
import Hero from '../components/home-page/hero';
import About from '../components/home-page/about';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Gopi' Blog</title>
                <meta
                name = 'description'
                content = 'I post about programming and web development.'
                 />
            </Head>
            <Hero/>
            <About/>
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60 // not required.
    }
}

export default HomePage;