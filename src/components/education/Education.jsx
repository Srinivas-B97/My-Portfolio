import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Masters' duration='Wilmington, DE - December 2023' company='Wilmington University' text="Masters degree in Infromation Systems, with a concentrartion of information assurance." />
            </div>
            <div className='timeline-container'>

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='B.Tech' duration='Visakhapatnam, IN - Jun 2018' company='Gitam University' text="Bachelors Degree in Electrical and Electronics Engineering From Gitam University." />
            </div>

        </div>
    )
}

export default Education
