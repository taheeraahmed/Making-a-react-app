import Typography from 'material-ui/styles/typography';
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
            'Python',
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
            '... har også lyst til å lære meg mer'
        ];

        const listItems = list.map((item) =>
            <li><span>{item}</span></li>
        );
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>

        );
    }  
}