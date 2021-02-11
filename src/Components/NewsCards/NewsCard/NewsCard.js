import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';

import useStyles from './NewsCardStyle';
import newsImage from '../../../Assets/images/News.jpg'

const NewsCard = ({ image, url, title, description, date, source, number }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia
                    className={classes.media}
                    image={image ? image : newsImage}

                />
                <div className={classes.details}>
                    <Typography component='p' variant='body2' color='textSecondary'>
                        {(new Date(date)).toDateString()}
                    </Typography>
                    <Typography component='p' variant='body2' color='textSecondary'>
                        {source}
                    </Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Typography variant='h5' color='textSecondary' component='p'>
                    {number + 1}
                </Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;
