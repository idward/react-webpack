import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

// function Square(props){
//     return (
//         <button className="square" onClick={props.click}>{props.value}</button>
//     )
// }

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.click.bind(this)}>
                {this.props.value}
            </button>
        );
    };
}

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: new Array(9).fill(null),
            xIsNext: true
        };
    }

    handleClick(i) {
        //copy new array object (without mutate)
        const newSquares = this.state.squares.slice();
        newSquares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: newSquares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i] ? this.state.squares[i] : i} click={()=>this.handleClick(i)}/>;
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*Todo*/}</ol>
                </div>
            </div>
        )
    }
}

//计算规则
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }

    return null;
}

const app = document.getElementById('app');

ReactDOM.render(<Game/>, app);