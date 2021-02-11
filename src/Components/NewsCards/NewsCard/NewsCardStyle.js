import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderBottom: '10px solid white',
    },
    media: {
        height: '250px',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px 8px 16px',
    }
});

export default useStyles;