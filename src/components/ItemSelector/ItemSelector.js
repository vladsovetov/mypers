import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { FormattedMessage, injectIntl } from 'react-intl';

import styles from './ItemSelector.module.css';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const ItemSelector = (props) => {
    const classes = useStyles();
    return (
        <div className={styles['items-selector']}>
            <Dialog fullScreen open={props.open} onClose={props.onClosed} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.onClosed} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <FormattedMessage id="itemSelector.title"/>
                        </Typography>
                        <Button color="inherit" onClick={props.onClosed}>
                            <FormattedMessage id="itemSelector.save"/>
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem>
                    <TextField
                        id="outlined-name"
                        label={props.intl.formatMessage({id: 'itemSelector.nameLabel'})}
                        className={classes.textField}
                        // value={values.name}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    </ListItem>
                    <Divider />
                </List>
            </Dialog>
        </div>
    );
};

export default injectIntl(ItemSelector);