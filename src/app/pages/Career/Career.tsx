import './Career.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button from '../../components/Button/Button';
import NavigationTabs from '../../components/NavigationTabs/NavigationTabs';

import { RESUME_DOWNLOAD_LINK } from '../../../data/career';
import { NavigationTabOption } from '../../components/NavigationTabs/NavigationTabs';
import { PropsWithChildren } from 'react';
import { Routes, Route } from "react-router";
import CareerHistory from '../CareerHistory/CareerHistory';
import CareerTechnology from '../CareerTechnology/CareerTechnology';

const optionsNavigation: NavigationTabOption[] = [
  // {
  //   label: 'Overview',
  //   route: 'overview'
  // },
  {
    label: 'History',
    route: '/career/history'
  },
  {
    label: 'Technologies',
    route: '/career/technologies'
  }
];

function Career() {
    if (window.location.pathname.endsWith('/career')) {
        window.location.href = window.location.pathname + '/history';
        return null;
    }

    const isOnPageCV: boolean = window.location.pathname.endsWith('/overview');
    
    const downloadResume = () => {
        window.open(RESUME_DOWNLOAD_LINK, '_blank');
    }

    return (
        <>
            <div className="container-component-career">
                <PageWrapper>
                    <div className={"area-navigation-tabs" + (isOnPageCV ? "print-hidden" : "")}>
                        <div className="area-navigation-tabs-inner">
                            <NavigationTabs options={optionsNavigation}/>
                        </div>
                    </div>
                    
                    <div className="area-csv-download print-hidden">
                        <Button onClick={downloadResume} title="Download my resume">
                            <span>Download my resume&nbsp;</span>
                            <span className="fa fa-fw fa-download clickable"></span>
                        </Button>
                    </div>

                    <Routes>
                        <Route path="history" element={<CareerHistory />} />
                        <Route path="technologies" element={<CareerTechnology />} />
                    </Routes>
                </PageWrapper>
            </div>
        </>
    );
}

export default Career