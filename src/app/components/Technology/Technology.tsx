import './Technology.scss';

import { useState } from 'react';
import { TechnologyItem } from '../../../data/technologies';

interface TechnologyProps {
    technology: TechnologyItem;
}

function Technology({ technology }: TechnologyProps) {
    if (!technology) return null;

    const [showExperience, setShowExperience] = useState(true);

    const toggleShowExperience = () => {
        setShowExperience(!showExperience);
    };

    return (
        <div className="container-component-technology">
            <div className="display-technology-item-details print-whole">
                <div className="display-technology-item-title">
                    <span>{technology.title}</span>
                </div>

                {/* {technology.tags && technology.tags.length > 0 && (
                    <div className="display-technology-item-tags">
                        {technology.tags.map(tagItem => {
                            return (<Tag tag={tagItem}></Tag>);
                        })}
                    </div>
                )} */}

                {technology.experience && technology.experience.length > 0 && showExperience && (
                    <div className="display-technology-item-experience">
                        {technology.experience.map(experienceItem => {
                            return (
                                <div className="display-experience-item">
                                    <div className="display-experience-title">
                                        <span>{experienceItem.title}</span>
                                    </div>
                                    {experienceItem.description && (
                                        <p dangerouslySetInnerHTML={{ __html: experienceItem.description}}></p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Technology