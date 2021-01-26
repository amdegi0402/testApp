import React, {Component} from 'react';
import Board from './Board.js'

export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(this.calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        
        let all_history = history.concat([{
            squares: squares
        }])
        if(all_history.length === 3){
            all_history.shift();
        }

        this.setState({
            history: all_history,
            stepNumber: all_history.length -1,
            xIsNext: !this.state.xIsNext,
        });
    }

    claculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    jumpTo(step){
        const xIsNext = step !== this.state.stepNumber ? !this.state.xIsNext :this.xIsNext;
        this.setState({
            stepNumber: step,
            xIsNext
        });
    }

    render(){
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = this.calclateWinner(current.squares);
        let status;
        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        const moves = history.length < 2 ? null :(
            <button onClick={() => this.junpTo(0)}>１回前へ戻る</button>
        );

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

}