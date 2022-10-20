import classes from './about.module.css';

const About = () => {
    return (
        <section>
            <div>
                <h3 className={classes.title}>About,</h3>
                <p className={classes.content}>
                There are lot of content in the internet about Web3 development. Which makes lot of distraction and could not able pick one topic and continue till end of that concept. Most of the content are kind of Hello World! and repetative things.It's hard to find deep technical stuff. Here, I am hand picking some good real mini-projects from the internet. I belive only hands-on provides good understanding on one technology.
                </p>
            </div>
            
            <div>
                <h3 className={classes.title}>Puropose,</h3>
                <p className={classes.content}>
                All the posts have some pre-requests, You must watch the video- tutorial first on the internet and have some understanding. Then if you want to try the tutorial as hands-on or have a quick glance the tutorial again, You just simply walk through the snap-shots on the post. You can able to connect and code your self step by step to the completion of the project.  Which removes the head-heak by moving through the time-lapse of the video again and again. This is how, I am quickly preparing for any technical stuff. I hope you would also enjoy this experience.
                </p>
            </div>
            
            <div>
                <h3 className={classes.title}>Prerequisites (beginner),</h3>
                <p className={classes.content}>
                    <ul>
                        <li>Blockchain</li>
                        <li>Ethereum</li>
                        <li>Solidity</li>
                        <li>Ether.js, Web3.js</li>
                        <li>Html, Css, Javascript, React</li>
                    </ul>
                </p>
            </div>
            
            <div>
                <h3 className={classes.title}>Software installation prerequisites,</h3>
                <p className={classes.content}>
                    <ul>
                        <li>Nodejs</li>
                        <li>Metamask</li>
                        <li>VS code</li>
                    </ul>
                </p>
            </div>
        </section>
    );
}

export default About;