import './Career.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button from '../../components/Button/Button';
import NavigationTabs from '../../components/NavigationTabs/NavigationTabs';

import { RESUME_DOWNLOAD_LINK } from '../../../data/career';
import { NavigationTabOption } from '../../components/NavigationTabs/NavigationTabs';

const optionsNavigation: NavigationTabOption[] = [
  // {
  //   label: 'Overview',
  //   route: 'overview'
  // },
  {
    label: 'History',
    route: 'history'
  },
  {
    label: 'Technologies',
    route: 'technologies'
  }
];

function Career() {

    const isOnPageCV: boolean = false; // TODO: Implement this, in Angular it was `return this.router.url.endsWith('/overview');`

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

                    {/* TODO: Implement this */}
                    {/* <router-outlet/> */}
                </PageWrapper>
            </div>
        </>
    );
}

export default Career