import './Homepage.scss';

import PageWrapper from "../../components/PageWrapper/PageWrapper"
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { useState } from "react";

import Headshot from "../../../assets/images/headshot.webp";
import SimRacingSetup from "../../../assets/images/simracing-rig.webp";

function Homepage() {
    const [viewingSpotifyPlaylist, setViewingSpotifyPlaylist] = useState(false);

    const toggleShowSpotifyPlaylist = () => {
        setViewingSpotifyPlaylist(!viewingSpotifyPlaylist);
    };

    return (
        <>
            <div className="container-component-homepage">
                <PageWrapper>
                    <div className="homepage-inner">
                        <div className="homepage-area area-introduction">
                            <div className="side-by-side side-by-side-large-right">
                                <div className="headshot-container">
                                    <img src={Headshot} alt="A headshot of me" className="img-rounded img-full-width" />
                                </div>

                                <div className="main-description">
                                    <h1>Hey, I'm Daire</h1>
                                    <p>
                                        I'm a software developer based in Mayo, Ireland. I'm currently working at <a href="https://www.getfrankli.com" target="_blank">Frankli</a> as a Senior Software Developer.
                                    </p>
                                    <p>
                                        Most of my hobbies are related to technology in some way. I enjoy playing video games, listening to music and watching movies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="homepage-area area-music">
                            <Card>
                                <h3>Music</h3>
                                <p>
                                    There is rarely a moment when I'm not listening to something. I have a wide range of tastes and I'm always on the lookout for new music.
                                    <br /><br />
                                    Here's what I've been listening to lately:
                                </p>
                                {(() => {
                                    if (viewingSpotifyPlaylist) {
                                        return (
                                            <>
                                                <iframe className="iframe-spotify-playlist" src="https://open.spotify.com/embed/playlist/37i9dQZF1Epwk7SuBT7N2r?theme=0" width="100%" height="480" frameBorder="0" allow="fullscreen" loading="lazy"></iframe>
                                                <div className="text-center">
                                                    <Button onClick={toggleShowSpotifyPlaylist} title="See what I've been listening to lately">
                                                        <span>Collapse playlist&nbsp;</span>
                                                        <span className="fa fa-fw fa-chevron-up clickable"></span>
                                                    </Button>
                                                </div>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <div className="text-center">
                                                    <Button onClick={toggleShowSpotifyPlaylist} title="See what I've been listening to lately">
                                                        <span>See what I've been listening to lately&nbsp;</span>
                                                        <span className="fa fa-fw fa-chevron-down clickable"></span>
                                                    </Button>
                                                </div>
                                            </>
                                        )
                                    }
                                })()}
                            </Card>
                        </div>

                        <div className="homepage-area area-video-games">
                            <Card>
                                <h3>Video games</h3>
                                <p>
                                    Playing games is my favourite hobby - I've been playing video games for as long as I can remember. I play most of my games on PC but have owned a variety of consoles over the year due to some games being exclusive to certain platforms.
                                    <br /><br />
                                    I've had my Steam account since 2005 and have amassed a collection of over 1500 games since then. My favourite game is Mirror's Edge.
                                    <br /><br />
                                    The process of designing, developing and releasing a video game fascinates me. I have a collection of video game design books and have tried a small amount of game development myself.
                                    <br /><br />
                                    Myself and my dad worked together to put together a sim-racing setup which we use to play racing games.
                                    <br /><br />
                                    <img src={SimRacingSetup} alt="My sim-racing setup" className="img-rounded img-full-width" />
                                </p>
                            </Card>
                        </div>
                    </div>
                </PageWrapper>
            </div>
        </>
    );
}

export default Homepage;