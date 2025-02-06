import './CareerCv.scss';

import { careerEntries, careerEntriesCertifications } from '../../../data/career';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import CareerEntrySmall from '../../components/CareerEntrySmall/CareerEntrySmall';

function CareerCv() {

    const downloadAsPDF = () => {
        window.print();
    }

    return (
        <div className="container-component-career-cv">
            <div className="area-main-details">
                <div className="side-by-side side-by-side-xlarge-right">
                <div className="headshot-container">
                    <img src="/src/assets/images/headshot.webp" alt="A headshot of me" className="img-rounded img-full-width" />
                    
                    <div className="text-center">
                    <h1>Daire Finn</h1>
                    <div>Software developer</div>
                    <div>Mayo, Ireland.</div>
                    {import.meta.env.PHONE_NUMBER && (
                        <div>
                        <span className="fa fa-fw fa-phone"></span>
                        <span>&nbsp;{import.meta.env.PHONE_NUMBER}</span>
                        </div>
                    )}
                    {import.meta.env.EMAIL_ADDRESS && (
                        <div className="text-nowrap">
                        <span className="fa fa-fw fa-envelope"></span>
                        <span>&nbsp;<a href={'mailto:' + import.meta.env.EMAIL_ADDRESS}>{import.meta.env.EMAIL_ADDRESS}</a></span>
                        </div>
                    )}
                    <div>
                        <span className="fa fa-fw fa-globe"></span>
                        <span>&nbsp;<a href="dairefinn.com">dairefinn.com</a></span>
                    </div>
                    </div>
                    <p>
                    <a href="mailto:hello@dairefinn.com"></a>
                    </p>
                </div>
                
                <div className="main-description">
                    <Card>
                        <h1>My experience</h1>
                        {careerEntries.map((careerEntry) => (
                            <CareerEntrySmall key={careerEntry.title} careerEntry={careerEntry}></CareerEntrySmall>
                        ))}
                    </Card>
                    
                    <Card>
                        <h1>My education</h1>
                        {careerEntriesCertifications.map((educationEntry) => (
                            <CareerEntrySmall key={educationEntry.title} careerEntry={educationEntry}></CareerEntrySmall>
                        ))}
                    </Card>
                
                    <Card>
                    <h1>My own projects</h1>
                        {/* {projectEntries.map((projectItem) => (
                            <ProjectEntry key={projectItem.title} projectEntry={projectItem}></ProjectEntry>
                        ))} */}
                    </Card>
                
                    <Card>
                    <h1>Technologies I have experience with</h1>
                    <p>Sample text here</p>
                    </Card>
                </div>
                </div>
            </div>

            <div className="text-center print-hidden">
                <Button onClick={downloadAsPDF} title="Download this page as a PDF">
                <span>Download as PDF&nbsp;</span>
                <span className="fa fa-fw fa-download clickable"></span>
                </Button>
            </div>
            </div>

    )
}

export default CareerCv