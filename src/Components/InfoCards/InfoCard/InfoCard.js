import React from 'react';
import { Typography } from '@material-ui/core';

import classes from './InfoCard.module.css'

const IntroCard = ({ cardContent }) => {

    return (
        <div className={classes.InfoCard} style={{ backgroundColor: cardContent.color }}>
            <Typography variant='h5' component='h2' gutterBottom>
                {cardContent.title}
            </Typography>
            {
                cardContent.info ?
                    <Typography variant='subtitle2' component='p'>
                        <strong>{cardContent.title.split(' ')[2]}:</strong>
                        <br />
                        {cardContent.info}
                    </Typography>
                    :
                    null
            }
            <Typography variant='subtitle1' component='p'>
                Try saying:<br /> <i>{cardContent.text}</i>
            </Typography>
        </div>
    )
}

export default IntroCard
