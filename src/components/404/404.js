import React from 'react';

class PageNotFound extends React.Component{ 
    componentDidMount() {  
        console.log(this.props.HideNav)
        this.props.HideNav(true);
    }

    render() {
        return(
            <div>
asdfasdfds
            </div>
        )
    }
}

export default PageNotFound;