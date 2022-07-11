import { createTheme } from '@mui/material';

const themes = createTheme({
    components: {
        MuiButton: {
            variants: [{
                props: { variant: 'link' },
                style: {
                    textTransform: 'none',
                    textDecoration: 'underline',
                },
            }],
        },
        MuiMenuItem: {
            variants: [{
                props: { variant: 'notActive' },
                style: {
                    cursor: 'default',
                    pointerEvents: 'none'

                },
            }],
        }
    },
});

export default themes;