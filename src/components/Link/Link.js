import React from 'react';
import Link from '@material-ui/core/Link';

const styles = {
    link: {
        color: 'black',
    }
};

export default class MyLink extends React.Component{
    render() {
        return(
            <div>
                <Link href={this.props.linkPath}
                    className={styles.link} >
                    {this.props.linkName}
                </Link>
            </div>
        );
    }
}