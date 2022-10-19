import Link from 'next/link';
import Image from 'next/image';
import classes from './logo.module.css';

const Logo = () => {
    const twitterlink = `https://twitter.com/gopi7dhoni`;
    const linkedinlink = `https://www.linkedin.com/in/dgopikumar/`;
    const githublink = `https://github.com/dgopikumar`;

    return (
        <div className={classes.logo}>Gopi' Next Blog
        <span className={classes.sociallogo}>
                    <Link href={twitterlink}>
                        <a>
                        <Image src='/images/site/twitter.png' alt='Gopi twitter url' width={20} height={20} />
                        </a>
                    </Link>

                    <Link href={linkedinlink}>
                        <a>
                        <Image src='/images/site/linkedin.png' alt='Gopi linkedin url' width={20} height={20} />
                        </a>
                    </Link>

                    <Link href={githublink}>
                        <a>
                        <Image src='/images/site/github.png' alt='Gopi github url' width={20} height={20} />
                        </a>
                    </Link>
                </span>
        </div>
        
    );
}

export default Logo;