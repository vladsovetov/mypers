import React, { useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { fetchItems } from '../../actions/items';

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
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { onInit, type, items } = props;
    const itemType = type.toLowerCase();

    useEffect(() => {
        onInit(itemType.toLowerCase());
    }, [onInit, itemType]);
    return (
        <div className={styles['items-selector']}>
            <Dialog fullScreen={fullScreen} open={true} onClose={props.onClosed} TransitionComponent={Transition}>
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
                    {items && items[itemType] ? items[itemType].map((item) => {
                        return <ListItem key={item._id}>
                            {item.name}
                        </ListItem>
                    }) : null}
                </List>
            </Dialog>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onInit: (type) => {
            dispatch(fetchItems(type));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ItemSelector));