import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/NaderDabit.png' alt='An image showing Gopi'
                width={300} height={300} />
            </div>
            <h1>Hi, I'm Gopi</h1>
            <p>
                I blog about Web3 development - espcially Dapps application development using frameworks
                like Next.js, React, Ether.js
            </p>
        </section>
    );
}

export default Hero;