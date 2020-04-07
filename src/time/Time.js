import React from 'react';
import './Time.css';

class Timer extends React.Component{

    state = {
        time : 0, 
        play : true
    };
    
    // start function:
    start = () => {
        this.interval = setInterval(() => {
            this.setState({
                play : false,
                time : this.state.time + 1
            }); 
        },1000);
    };

    // pause function:
    pause = () => {
        this.setState({
            play : true
        });
        clearInterval(this.interval);
    };

    //reset function:
    reset = () =>{
        this.setState({
            time : 0 ,
            play : true
        });
        clearInterval(this.interval);
    };

    //rendering:
    render() {

        //counting hours, minutes and seconds
        let hours = String(parseInt(this.state.time / 3600)).padStart(2,'0');
        let minutes = String(parseInt((this.state.time / 3600)%60)).padStart(2,'0') ;
        let seconds = String(parseInt(this.state.time % 60)).padStart(2,'0');
        
        return(
            <div>
                <p>{hours}:{minutes}:{seconds}</p>
                {this.state.play ? (
                    <button onClick = {() => this.start()}>Start</button>
                ):(
                    <button onClick = {() => this.pause()}>Pause</button>
                )}
                <button onClick = {() => this.reset()}>Reset</button>
            </div>
        )
    }
}
export default Timer;