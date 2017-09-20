import React from 'react';

class WherepothecaryPanel extends React.Component {
    handleSend(){
        const price = this.myValue.value;
        this.props.handleSend(price);
        console.log(price);
    }

    //Obliczanie odleglosci
    calculateDistance(latU, lonU, latA, lonA) {
        var R = 6371; // Radius of the earth in km
        var dLat = (latA - latU) * (Math.PI / 180);  // deg2rad below
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

    

    
    render() {
        const apteki = this.props.apteki;
        const fakePayload = this.props.fakePayload;
        const drugs = this.props.drugs;

        console.log({drugs})

        console.log('Lista aptek', { apteki });

        const rngAptekaId = Math.floor(Math.random() * 5);
        const rngPayloadId = Math.floor(Math.random() * 4);

        console.log('Lista payloadow', { fakePayload })
        console.log('Losowe id payloadu', rngPayloadId)

        let aptekaLat = '';
        let aptekaLon = '';

        const listaAptek = apteki.map(apteka => {
            if (apteka.id === rngAptekaId) {
                aptekaLat = apteka.lat;
                aptekaLon = apteka.lon;
                console.log(aptekaLat);
                return (
                    <li key={apteka.name} >{apteka.name} mieszcząca się na ulicy {apteka.address}</li>
                )
            }
        })

        const payload = fakePayload.map(payload => {
            //dopasowanie losowego id
            if (payload.payloadId === rngPayloadId) {
                //Na kazdy lek twordze oddzielna komorke
                return payload.drugsId.map(id => {
                    return <tr>
                        <td> {id}</td>
                        <td>{drugs[id].name}</td>
                        <td><input ref={(value) => {this.myValue = value}} onChange={this.handleSend.bind(this)} type="number" name="price" /></td>
                        <td><button>Send</button></td>
                        <td><button>X</button></td>
                        <td>{this.calculateDistance(payload.lat,payload.lon,aptekaLat,aptekaLon).toFixed(1)} km </td>
                    </tr>
                })
            }
        })

        return (
            <div>
                <div id='tymczasowe' className='col-xs-4'>
                    <p>Wylosowana apteka: </p>
                    <ul>
                        {listaAptek}
                    </ul>
                </div>

                <table id='wherepothecaryPanel' className='col-xs-8'>
                    <tbody>
                        <tr>
                            <td>ID Leku</td>
                            <td>Nazwa</td>
                            <td>Cena (zł)</td>
                            <td>Wyślij</td>
                            <td>Usuń</td>
                            <td>Odleglosc</td>
                        </tr>
                        {payload}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WherepothecaryPanel