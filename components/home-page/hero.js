import Image from 'next/image';
import Link from 'next/link';
import classes from './hero.module.css';

const Hero = () => {
    const twitterlink = `https://twitter.com/gopi7dhoni`;
    const linkedinlink = `https://www.linkedin.com/in/dgopikumar/`;
    const githublink = `https://github.com/dgopikumar`;

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/gopi.png' alt='An image showing Gopi'
                width={300} height={300} />
            </div>
            <h1>Hi, I'm Gopi
                <span className={classes.logo}>
                    <Link href={twitterlink}>
                        <a>
                        <Image src='/images/site/twitter48.png' alt='Gopi twitter url' width={48} height={48} />
                        </a>
                    </Link>

                    <Link href={linkedinlink}>
                        <a>
                        <Image src='/images/site/linkedin48.png' alt='Gopi linkedin url' width={48} height={48} />
                        </a>
                    </Link>

                    <Link href={githublink}>
                        <a>
                        <Image src='/images/site/github48.png' alt='Gopi github url' width={48} height={48} />
                        </a>
                    </Link>
                </span>
            </h1>
            <p>
                I blog about Web3 development - espcially Dapps application development using frameworks
                like Next.js, React, Ether.js
            </p>
        </section>
    );
}

export default Hero;