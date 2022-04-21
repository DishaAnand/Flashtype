import React from 'react';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Challenge from '../Challenge/Challenge';
import Nav from '../Nav/Nav';
import {SAMPLE_PARAGRAPHS} from "./../../Data/Sampleparagraph"
import "./App.css";
import TestLetter from '../TestLetter/TestLetter';


const TotalTime=60;
const serviceURL="http://metaphorpsum.com/paragraphs/1/9"
const DefaultState={
    selectedParagraph:"",
    timerStarted:false,
    timeRemaining:TotalTime,
    words:0,
    characters:0,
    wpm:0,
    testInfo:[]
};


class App extends React.Component{
    state=DefaultState
    fetchNewParagraphFallback=()=>{
        const data=SAMPLE_PARAGRAPHS[
            Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)
        ]
        const selectedArray=data.split("")
            const testInfo=selectedArray.map(selectedLetter=>{
            return{
                testLetter:selectedLetter,
                status:"notattempted"
            }
        })
        this.setState({...DefaultState,testInfo,selectedParagraph:data
        });
    }

    fetchNewParagraph=()=>{
        fetch(serviceURL)
        .then(response=>response.text())
        .then(data=>{
            
            
            const selectedArray=data.split("")
            const testInfo=selectedArray.map(selectedLetter=>{
            return{
                testLetter:selectedLetter,
                status:"notattempted"
            }
        })
        this.setState({...DefaultState,testInfo,selectedParagraph:data})
        });

    }
    componentDidMount(){
        this.fetchNewParagraphFallback();
        
    }

    startTimer=()=>{
        this.setState({timerStarted:true});
        const timer=setInterval(()=>{
            if(this.state.timeRemaining>0){
                //to chnage wpm
                const timeSpent=TotalTime-this.state.timeRemaining;
                const wpm=timeSpent>0
                    ?(this.state.words/timeSpent)*TotalTime:0;
            this.setState({
                timeRemaining:this.state.timeRemaining-1,
                wpm:parseInt(wpm)
            })
        }else{
            clearInterval(timer)
        }
        },1000)
    }


    startAgain=()=>this.fetchNewParagraphFallback();

    handleUserInput=(inputValue)=>{
       if(!this.state.timerStarted) this.startTimer()
       const characters=inputValue.length
       const words=inputValue.split(" ").length
       const index=characters-1

       if(index<0){
           this.setState({
               testInfo:[
                   {
                   testLetter:this.state.testInfo[0].testLetter,
                   status:"notattempted"
                   },
                   ...this.state.testInfo.slice(1)
               ],
               characters,
               words,
           });
           return;
       }
       if(index>=this.state.selectedParagraph.length){
           this.setState({characters,words})
           return;
       }

       //copy of testInfo
       const testInfo=this.state.testInfo;
       if(!(index===this.state.selectedParagraph.length-1))
            testInfo[index+1].status="notattempted"
        
        //for correct letter
        const isCOrrect=inputValue[index]===testInfo[index].testLetter

        //update the testInfo
        testInfo[index].status=isCOrrect?"correct":"incorrect"

        //update the state
        this.setState({
            testInfo,words,characters
        })

    };


    render(){
        //console.log("test-info",this.state.testInfo);
       
        return (
            <div className="app">
                <Nav />
                <Landing />
                
                <Challenge 
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    handleUserInput={this.handleUserInput}
                    startAgain={this.startAgain}
                
                />
                <Footer />

            </div>
        )
    }
}

export default App;