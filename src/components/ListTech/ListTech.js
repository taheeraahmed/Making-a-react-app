import { Box } from '@material-ui/core';
import React from 'react';
import './ListTech.css';


export class ListTech extends React.Component {
    render() {
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

        const listItems = list.map((item) =>(
             <Box p={1}>
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
}