import './root.scss';

import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import Sidebar from './app/components/Sidebar/Sidebar';
import Homepage from './app/pages/Homepage/Homepage';

export function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>Daire Finn</title>
                <base href="/" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="My personal website. I use it to keep track of any interesting projects I've been working on and to also showcase my professional experience." />
                <meta name="keywords" content="Daire Finn, Daire, Finn, Senior Software Developer, Software Developer, Web Developer, Full-Stack Developer, Ireland, Portfolio, Projects, Experience, Career, Resume, CV, Personal Website, Personal, Website" />
                <meta name="author" content="Daire Finn" />
                <meta name="language" content="English" />
                <meta name="distribution" content="global" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

                <link rel="icon" type="image/x-icon" href="assets/images/favicons/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="src/assets/images/favicons/favicon-32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="src/assets/images/favicons/favicon-16.png" />

                <link rel="canonical" href="https://dairefinn.com/" />

                <script src="https://kit.fontawesome.com/08957269d5.js" crossOrigin="anonymous"></script>

                <Meta />
                <Links />
            </head>
            <body>
                <div className="app-wrapper">
                    <div className="container-sidebar print-hidden">
                        <Sidebar />
                    </div>
                    <div className="container-page">
                        {children}
                    </div>
                </div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return <Outlet />;
}
