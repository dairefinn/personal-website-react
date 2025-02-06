import './styles.scss';

import { PropsWithChildren } from 'react';
import { Routes, Route } from "react-router";

import Sidebar from './app/components/Sidebar/Sidebar';
import Homepage from './app/pages/Homepage/Homepage';
import Projects from './app/pages/Projects/Projects';
import Career from './app/pages/Career/Career';
import Contact from './app/pages/Contact/Contact';

export function App({ children }: PropsWithChildren<{}>) {
    return (
        <div className="app-wrapper">
            <div className="container-sidebar print-hidden">
                <Sidebar />
            </div>
            <div className="container-page">
                <Routes>
                    <Route index path="/home" element={<Homepage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route index path="/career/*" element={<Career />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Homepage />} />
                </Routes>
                {children}
            </div>
        </div>
    );
}

export default App;