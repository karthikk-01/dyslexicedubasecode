import React, {Component} from 'react';
import axios from 'axios';
import './dashboard.css';

class DashboardComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      word: "",
      wordList: [],
      selectedWord : '',
      isWordSaveSuccess: false
    }
  }

  getWords = async () => {
    try {
      const getWordResponse = await axios.get('http://localhost:8080/api/words/get');
      this.setState({wordList: getWordResponse.data, word: ''})
    } catch(e){
      console.error(e)
    }
  }

  componentDidMount = () =>{
    this.getWords();
  }

  // Connect the google api here

  // nnd of google api
  speak = (word, id) => {
    this.setState({selectedWord: id})
  }

  saveWordings= async (e) =>{
    if(this.state.word) {
      try {
        const saveWordResponse = await axios.post('http://localhost:8080/api/words/save', {word : this.state.word});
        this.getWords();
      }catch(e){
        console.error(e);
        this.setState({isWordSaveSuccess: false})
      } 
    } else {
      this.setState({isWordSaveSuccess: false});
    }
   
  }


  render() {
    const { word, wordList, selectedWord } = this.state;
    
    return (
      <div className="dashboard">
      <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card dashBoardcard">
          <div className="card-header">Wordings
          </div>
          <div className="card-body">
          <div id="myDIV" class="header">
           <input type="text" id="myInput" onChange={e => this.setState({word: e.target.value})} value={word} placeholder="Enter the word" />
           <button type="button" onClick={e => this.saveWordings(e)} class="btn btn-primary addBtn">Add</button>
        </div>


        <ul class="todoUl list-group">
          
          {wordList && wordList.map((wList, index) => (
            
            <li onClick={e => this.speak(wList.word, index)} id={index} 
            class= {selectedWord === index ? "list-group-item toDoLi active" : "list-group-item toDoLi"}>{wList.word}</li>
          ))}
        </ul>

          </div>
        </div> 
      </div>
    </div>
    </div>
    );
  }
 
}

export default DashboardComponent; 
