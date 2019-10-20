import React, { useState, useEffect } from 'react';
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
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FormattedMessage, injectIntl } from 'react-intl';

import constants from '../../constants';

import styles from './ItemCreator.module.css';

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


const ItemCreator = (props) => {
    const {formatMessage} = props.intl;
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const itemTypeFields = {
        [constants.ITEM_TYPE.HELMET]: [{
            name: 'name',
            type: 'text',
            label: formatMessage({id: 'itemCreator.nameLabel'}),
        }, {
            name: 'lvl',
            type: 'number',
            label: formatMessage({id: 'itemCreator.lvlLabel'}),
        }, {
            name: 'required_lvl',
            type: 'number',
            label: formatMessage({id: 'itemCreator.requiredLvlLabel'}),
        }, {
            name: 'required_str',
            type: 'number',
            label: formatMessage({id: 'itemCreator.requiredStrLabel'}),
        }]
    }

    const [itemProps, setItemProps] = useState({});

    useEffect(() => {
        // console.log(itemDefaultProps);
        setItemProps({
            type: constants.ITEM_TYPE.HELMET,
            ...getDefaultItemProps(constants.ITEM_TYPE.HELMET)
        });
    }, []);

    const getDefaultItemProps = (type) => {
        const defaultItemProps = {};
        if (itemTypeFields[type]) {
            itemTypeFields[type].forEach(field => {
                defaultItemProps[field.name] = '';
            });
        }
        return defaultItemProps;
    }

    const onSaved = () => {
        const itemData = {
            ...itemProps,
            type: itemProps.type.toLowerCase()
        }
        props.itemSaved(itemData);
    }

    const handleItemTypeChange = (e) => {
        const target = e.target;
        setItemProps({
            ...itemProps,
            ...getDefaultItemProps(target.value),
            type: target.value,
        });
    };

    const handleFieldChange = (e) => {
        const target = e.target;
        console.log(target.getAttribute('name'))
        setItemProps({
            ...itemProps,
            [target.getAttribute('name')]: target.value
        });
    };
    return (
        <div className={styles['items-creator']}>
            <Dialog fullScreen={fullScreen} open={true} onClose={props.onClosed} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.onClosed} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <FormattedMessage id="itemCreator.title"/>
                        </Typography>
                        <Button color="inherit" onClick={onSaved}>
                            <FormattedMessage id="itemSelector.save"/>
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem>
                        <FormControl className={classes.formControl} fullWidth={true}>
                            <InputLabel htmlFor="type">
                                {formatMessage({id: 'itemCreator.typeLabel'})}
                            </InputLabel>
                            <Select
                                value={itemProps.type}
                                onChange={handleItemTypeChange}
                                inputProps={{
                                    name: 'type',
                                    id: 'type'
                                }}
                            >
                                {Object.values(constants.ITEM_TYPE).map(type => {
                                    return (
                                        <MenuItem value={type} key={type}>
                                            {formatMessage({id: `itemTypes.${type.toLowerCase()}`})}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </ListItem>
                    {itemTypeFields[itemProps.type] ? itemTypeFields[itemProps.type].map(field => {
                        switch (field.type) {
                            case 'text':
                                return (
                                    <ListItem key={field.name}>
                                        <TextField
                                            id="outlined-name"
                                            name={field.name}
                                            label={field.label}
                                            className={classes.textField}
                                            value={itemProps[field.name]}
                                            onChange={handleFieldChange}
                                            margin="normal"
                                            fullWidth={true}
                                        />
                                    </ListItem>
                                );
                            case 'number':
                                return (
                                    <ListItem key={field.name}>
                                        <TextField
                                            type="number"
                                            id="outlined-name"
                                            name={field.name}
                                            label={field.label}
                                            className={classes.textField}
                                            value={itemProps[field.name]}
                                            onChange={handleFieldChange}
                                            margin="normal"
                                            fullWidth={true}
                                        />
                                    </ListItem>
                                );
                            case 'devider':
                                return <Divider />;
                            default:
                                return null;
                        }
                    }) : null}
                </List>
            </Dialog>
        </div>
    )
};

export default injectIntl(ItemCreator);