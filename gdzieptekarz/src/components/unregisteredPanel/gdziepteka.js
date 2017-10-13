import React, { Component } from 'react';
import '../../App.css';
import DrugsList from './components/drugsList';
import Logo from './components/logo';
import Search from './components/search'
import SelectedDrugs from './components/selectedDrugs'
import GoogleMap from './components/map';


class Gdziepteka extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      numberOfDrugs: 20,
      picked: [
      ],
      lat: '',
      lon: '',
      //Current Lat: 51.799 Current Lng: 19.456  tymczasowe koordy pseudoapteki
      latA: 51.799,
      lonA: 19.456,
      pickedDrugs: []
    }
  }

  //USTAWIA COORDY DO STATE
  getCoords(lati, longi) {
    this.setState({
      lat: lati,
      lon: longi
    })
  }

  //FILTR WYSZUKIWARKI LEKOW
  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  //ILOSC LEKOW NA STRONIE
  numberOfDrugs(value) {
    if (value == '') {
      value = 5;
    } else if (value > 100) {
      value = 20;
      alert('Załadowanie wiekszej ilosci lekow grozi błędem. Przywracam domyslne 20')
    }
    this.setState({
      numberOfDrugs: value
    })
  }

  //DODANIE LEKOW DO LISTY DO WYSLANIA DO APTEKI
  addDrug(a, b, c, d, e) {
    const pickedDrugList = this.state.picked.concat([{ a, b, c, d, e }]);
    this.setState({
      picked: pickedDrugList
    })
  }

  //USUNIECIE NIECHCIANEGO LEKU Z LISTY DO WYSLANIA
  deleteDrug(id) {
    const { picked } = this.state;
 
    var index = picked.indexOf(id);

    const newDrugs = [
      ...picked.slice(0, index),
      ...picked.slice(index + 1)
    ]

    this.setState({
      picked: newDrugs
    })
  }


  //WYSLANIE LEKOW DO API
  sendDrugs() {
    const { picked, lat, lon, latA, lonA } = this.state;

    //ZOSTAWIE ZAKOMENTOWANE JAKBY BYLO POTRZEBNE

    // var R = 6371; // Radius of the earth in km
    // var dLat = (latA - lat) * (Math.PI / 180);  // deg2rad below
    // var dLon = (lonA - lon) * (Math.PI / 180);
    // var a =
    //   Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //   Math.cos((Math.PI / 180) * (lat)) * Math.cos((Math.PI / 180) * (latA)) *
    //   Math.sin(dLon / 2) * Math.sin(dLon / 2)
    //   ;
    // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // var d = R * c; // Distance in km


    //WYSYLANIE LEKU DO API
    picked.forEach((lek) => {
      fetch('http://localhost:8080/api/leki', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ A: lek.a, B: lek.b, C: lek.c , D: lek.d, E: lek.e, lat: lat, lon: lon })
      }).then(res => res.json())
        .then(res => console.log(res));

    })

    //zerowanie listy
    this.setState({
      picked: []
    })
  }


  render() {
    return (
      <div>
        <div className='col-md-4 search'>
          <div>Coordy u rodzica: {this.state.lon}, {this.state.lat}</div>
          <Logo />
          <Search
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
            numberOfDrugs={this.numberOfDrugs.bind(this)}
          />
          <SelectedDrugs
            picked={this.state.picked}
            deleteDrug={this.deleteDrug.bind(this)}
            sendDrugs={this.sendDrugs.bind(this)}
          />

          <DrugsList
            filterText={this.state.filterText}
            numberOfDrugs={this.state.numberOfDrugs}
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
