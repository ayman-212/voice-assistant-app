import React, { useState, useEffect } from 'react';
import { Grow, Grid } from '@material-ui/core';
import axios from '../../axios';

import IntroCard from './InfoCard/InfoCard';
import useStyles from './InfoCardsStyle';

const IntroCards = () => {
    const [infoCards, setInfoCards] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        axios.get('/info.json')
            .then(response => {
                setInfoCards(response.data)
            })
    }, [])

    let cards = null;
    if (infoCards) {
        cards = (
            <Grow in>
                <Grid
                    className={classes.main}
                    container
                    spacing={3}
                    alignItems='stretch'>
                    {infoCards.map((infoCard, index) => (
                        <Grid className={classes.info} item xs={12} sm={6} md={4} lg={3} key={index}>
                            <IntroCard cardContent={infoCard} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return cards
}

export default IntroCards;