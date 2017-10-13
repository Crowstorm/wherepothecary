import React from 'react';
import { connect } from 'react-redux'
import {  setPriceFunction, sendRemoveFunction, setApiDrug } from '../../../actions/leki'



class Leki extends React.Component {
    componentWillMount() {
        //POBRANIE WSZYSTKICH LEKOW Z API I DODANIE ICH DO STORE
        fetch('http://localhost:8080/api/leki').then(function (data) {
            return data.json();
        }).then((data) => {
            this.props.dispatch(setApiDrug(data))
        })
    }


    getDrugs() {
        //DLUGOSC TABLICY Z LEKAMI
        const length = this.props.renderedDrugs2.length;

        const arrayOfDrugs = [];

        //OBLICZANIE DYSTANSU MIEDZY APTEKA A UZYTKOWNIKIEM
        const calculateDistance = (latU, lonU, latA, lonA) => {
            var R = 6371; // Radius of the earth in km
            var dLat = (latA - latU) * (Math.PI / 180);
            var dLon = (lonA - lonU) * (Math.PI / 180);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos((Math.PI / 180) * (latU)) * Math.cos((Math.PI / 180) * (latA)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d;
        }
        
        //USTAWIENIE CENY LEKU I DODANIE CENY DO STORE
        const handlePriceChange = (e) => {
            return this.props.dispatch(setPriceFunction(e.target.name, e.target.value));
        }

        //AKTUALIZACJA LEKU W API O CENE
        const handleSend = (e) => {
           fetch('http://localhost:8080/api/leki/' + this.props.renderedDrugs2[e.target.id].id, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ price: this.props.renderedDrugs2[e.target.id].cena })
          }).then(res => res.json())
            .then(res => console.log(res));

            console.log(e.target.id, 'Wysylam lek o id ', this.props.renderedDrugs2[e.target.id].id, ' ktory koztuje ', this.props.renderedDrugs2[e.target.id].cena)
        }


        //USUNIECIE LEKU Z API
        //Rozwiazanie tymczasowe, na te chwile znaczy, ze user nie odbierze zadnej informacji
        const handleRemoveDrug = (e) => {
            console.log('We dont have this drug PLACEHOLDER')

            fetch('http://localhost:8080/api/leki/' + this.props.renderedDrugs2[e.target.id].id, {
                method: 'DELETE',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                }
              }).then(res => res.json())
                .then(res => console.log(res));

            this.props.dispatch(sendRemoveFunction(this.props.renderedDrugs2[e.target.id].id));
        }

        //RENDER WSZYSTKICH LEKOW W API DO TABELI W INTERFEJSIE
        for (var i = 0; i < length; i++) {
            arrayOfDrugs.push(<tr key={this.props.renderedDrugs2[i].id}>
                <td>{this.props.renderedDrugs2[i].nazwa}</td>
                <td>{this.props.renderedDrugs2[i].postac}</td>
                <td>{this.props.renderedDrugs2[i].dawka}</td>
                <td>{this.props.renderedDrugs2[i].opakowanie}</td>
                <td>{this.props.renderedDrugs2[i].producent}</td>
                <td><input value={this.props.renderedDrugs2[i].cena} onChange={handlePriceChange} type="number" name={this.props.renderedDrugs2[i].id} /></td>
                <td><button id={i} onClick={handleSend}>Send</button></td>
                <td><button id={i} onClick={handleRemoveDrug}>X</button></td>
                <td>{calculateDistance(this.props.renderedDrugs2[i].lat, this.props.renderedDrugs2[i].lon, this.props.apteka.latA, this.props.apteka.lonA).toFixed(1)} km </td>
            </tr>
            )
        }
        return arrayOfDrugs;
    }

    render() {
        //CZEKANIE NA ZALADOWANIE
        const tableOfDrugsRender = (this.props.renderedDrugs2) ? this.getDrugs() : notRendered()

        function notRendered() {
            return 'Not rendered yet'
        }
        return (
            <tbody>{tableOfDrugsRender}</tbody>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        apteka: state.apteka,
        renderedDrugs2: state.renderedDrugs2
    }
}

export default connect(mapStateToProps)(Leki)
