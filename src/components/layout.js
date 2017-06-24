import React from 'react';

import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {title:'Hello!'};
    }

    changeTitle(title){
        this.setState({title:title});
    }

    render() {
        // setTimeout(function () {
        //     this.setState({title:'Hello,Will!'});
        // }.bind(this),2000);

        return (
           <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}




