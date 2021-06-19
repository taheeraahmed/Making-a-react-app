import { Box,makeStyles } from '@material-ui/core';
import React from 'react';
import './ListTech.css';

const useStyles = makeStyles((theme) => ( {
    box: {
        transition:'height .5s ease-out 1s',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        "&:hover":{
            transition:'height .5s ease-out 0s',
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            boxShadow: '0 1px 7px 3px rgba(255, 105, 135, .3)',
            color: 'white',
            borderRadius: '5px',
            transform: 'scale(1.001)',
            transitionDuration: '0.5s',
            transition: 'color 0.1ms ease-out, background 1s ease-in',
        }
    },
}));

const list = [
    'Python',
    'Webutvikling',
    'TypeScript ',
    'Kotlin',
    'React',
    'Git',
    'JavaScript',
    'Natural Language Processing',
    'Kunstig Intelligens',
    'Datavarehus',
    'SQL',
    'C',
    'C++ ',
    'Django',
    'Latex ',
    'KiCAD',
    'Smidig programvareutvikling',
    'Tensorflow',
    '... har også lyst til å lære meg mer'
];

export default function ListTech2() {
    const classes = useStyles();

    const listItems = list.map((item) =>(
        <Box p={1} className={classes.box}>
           {item}
       </Box>
       )
    );
    return (
        <div>
            <Box display="flex"
                flexWrap="wrap"
                alignContent="flex-start"
                >
            {listItems}
            </Box>
        </div>

    );
}