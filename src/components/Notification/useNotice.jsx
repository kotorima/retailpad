import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';
import Notification from './Notification';
import { useNotifications, removeSnackbar } from '../../store/slices/notifications';

let displayed = [];

const useNotice = (noticeProps) => {
    const dispatch = useDispatch();
    const notifications = useSelector(useNotifications);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    const renderNotification = (props) => (<Notification key={props.key} {...props}/>);
    
    const storeDisplayed = (id) => {
        displayed = [...displayed, id];
    };

    const removeDisplayed = (id) => {
        displayed = [...displayed.filter(key => id !== key)];
    };

    useEffect(() => {
        notifications.forEach((noticeItem) => {
            const { options, dismissed = false } = noticeItem;
            const {onClose, variant, key} = options;

            if (dismissed) {
                closeSnackbar(key);
                return;
            }

            if (displayed.includes(key)) return;

            const contentProps = {variant, key, ...noticeItem};
            const customProps = noticeProps(contentProps);
            const { slide, notice, alert, button, message} = customProps;

            const snackbarProps = {
                key,
                content: renderNotification({notice, alert, button, message}),
                TransitionComponent: Slide,
                TransitionProps: slide,
                ...options,
                onClose: (event, reason, myKey) => {
                    if (onClose) {
                        onClose(event, reason, myKey);
                    }
                },
                onExited: (event, myKey) => {
                    dispatch(removeSnackbar(myKey));
                    removeDisplayed(myKey);
                },
            };

            enqueueSnackbar(message, snackbarProps);
            storeDisplayed(key);
        });
    }, [notifications, noticeProps, closeSnackbar, enqueueSnackbar, dispatch]);
};

useNotice.defaultProps = {
    noticeProps: {
        button: {},
        slide: {},
        notice: {},
        message: '',
        alert: {}
    }
}

export default useNotice;