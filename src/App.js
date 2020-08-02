import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navifation/navigation';
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"
import Singin from "./components/Singin/Singin"
import Register from "./components/Register/Register.js"
import Particles from 'react-particles-js';
import Logo from "./components/Logo/Logo";
import './App.css';
import ImageLinkFrom from "./components/ImageLinkFrom/ImageLinkFrom";
import Rank from "./components/Rank/Rank";

const app = new Clarifai.App({
  apiKey: '5b06305872d54887b768f0e40d8bd1b6'
 });

const particlesOptions = {
  particles: {
    number:{
      value:110,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component {
  constructor(){
      super()
      this.state = {
        input:'',
        imageUrl:'',
        box:{},
        route:'Singin',
        isSingin:false
      }
  }
  onInputChange =(event)=>{
    this.setState({input:event.target.value});
  }
  FaceLocation=(data)=>{
      const Face = data.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('inputImage')
      const width = Number(image.width)
      const height = Number(image.height)
      return{
        leftcol: Face.left_col *width,
        toprow: Face.top_row * height,
        rightcol: width - (Face.right_col *width),
        bottomrow: height -(Face.bottom_row *height),
      }
  }
  faceBox =(box)=>{
    console.log(box);
    this.setState({box:box})
  }
  onSubmit = () =>{ 
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input).then(response=> this.faceBox(this.FaceLocation(response))
      .catch(err=>console.log(err))
    )
  }
  onChangeRoute =(route) =>{
    if(route=== 'Singout'){
      this.setState({isSingin:false})
    }else if(route=== 'home'){
      this.setState({isSingin:true})
    }
    this.setState({route:route})
  }
  render() {
        return(
          <div className="App">
            <Particles  className="particles"
            params={particlesOptions}
          />
          <Navigation isSingin={this.state.isSingin} onChangeRoute={this.onChangeRoute}/>
          {
            this.state.route==='home'

          ?<div>
               <Logo />
               <Rank/>
               <ImageLinkFrom onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
               <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
               </div>
          
          : ( this.state.route==='Singin'
          ? <Singin onChangeRoute={this.onChangeRoute}/>
            :<Register onChangeRoute={this.onChangeRoute}/>
          )
          }
          </div>
    );  
    }
}   
export default App;
