import React, { Component } from 'react';
import '../../App.css';
import DrugsList from './components/drugsList';
import Logo from './components/logo';
import Search from './components/search'
import SelectedDrugs from './components/selectedDrugs'
import GoogleMap from './components/map';
//import {BrowserRouter, Route} from 'react-router-dom'
//bootstrap
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';



class Gdziepteka extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      picked: [
      ],
      lat: '',
      lon: '',
       //Current Lat: 51.799 Current Lng: 19.456  tymczasowe koordy pseudoapteki
      latA: 51.799,
      lonA: 19.456,
      count: 0,
      pickedDrugs: []
    }
  }

  getCoords(lati, longi){
    this.setState({
      lat: lati,
      lon: longi
    })
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  addDrug(a, b, c, d, e){
    //const {picked} = this.state;
    console.log('adding id', a);
    const pickedDrugList = this.state.picked.concat([{a,b,c,d,e}]);
    this.setState({
      picked: pickedDrugList
    })
  }
  

  deleteDrug(id){
    //const {count} = this.state
    const {picked} = this.state;
    console.log('kliniety id to', id)
    var index = picked.indexOf(id);
    console.log('index to',index);
    const newDrugs = [
      ...picked.slice(0, index),
      ...picked.slice(index+1)
    ]
    this.setState({
      picked: newDrugs
    })
    console.log('usuwam id', id, 'nowa tablica new drugs', {newDrugs})
  }

 
  sendDrugs(){
    const {picked, lat, lon, latA, lonA} = this.state;

      var R = 6371; // Radius of the earth in km
      var dLat = (latA-lat)* (Math.PI/180);  // deg2rad below
      var dLon = (lonA-lon) *(Math.PI/180); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos((Math.PI/180)*(lat)) * Math.cos((Math.PI/180)*(latA)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
     // console.log('Odleglosc do apteki wynosi: ', 'r', R, 'lata', latA, 'lat', lat,  'dlat', dLat, 'dlon' ,dLon, 'a', a, 'c', c,  'd', d);
      
    console.log('Wysylam leki o id: ', {picked}, 'Coordynaty uzytkownika: ', {lat}, '{}', {lon}, ' Odleglosc do domyslnej apteki wynosi ', d.toFixed(1), 'km' )
   this.setState({
     picked: []
   })
  }
  

  render() {
    return(
      <div>
        <div className='col-md-4 search'>
          <div>Coordy u rodzica: {this.state.lon}, {this.state.lat}</div>
          <Logo />
          <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
          <SelectedDrugs
          picked={this.state.picked}
          drugs={this.props.drugs} 
          deleteDrug={this.deleteDrug.bind(this)}
          sendDrugs={this.sendDrugs.bind(this)}
          />

          <DrugsList
          drugs={this.props.drugs} 
          filterText={this.state.filterText}
          addDrug={this.addDrug.bind(this)}
          />
         
        </div>

        <div className='col-md-8'>
          <GoogleMap getCoords={this.getCoords.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Gdziepteka;
