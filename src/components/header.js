import React from 'react';

export default class Header extends React.Component {
    //<!-- input标签 value必须和onChange事件同时配合存在 否则value值不能被修改 -->

    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <header><h1>{this.props.title}</h1></header>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    };
}
