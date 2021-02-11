import React from 'react';
import { Grow, Grid } from '@material-ui/core'

import NewsCard from './NewsCard/NewsCard';
import useStyle from './NewsCardsStyle';

const NewsCards = ({ articles }) => {
    const classes = useStyle();
    return (
        <Grow in>
            <Grid
                container
                spacing={3}
                alignItems='stretch'
                className={classes.container}>
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <NewsCard
                            image={article.urlToImage}
                            title={article.title}
                            date={article.publishedAt}
                            source={article.source.name}
                            description={article.description}
                            url={article.url}
                            number={index} />
                    </Grid>
                )
                )}
            </Grid>

        </Grow>
    )
}

export default NewsCards
