
import React from 'react';
import GoogleMapsLoader from 'google-maps';

//MOJ KLUCZ DO API, DO WYMIANY POZNIEJ BO MOGA ZBANOWAC JAK ZA DUZY RUCH
GoogleMapsLoader.KEY = 'AIzaSyBHek4tQK4jSQhVSoxw4s4c8tz_1z3xuNI';




class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
    this.handleLocationError = this.handleLocationError.bind(this);
    this.state = {
      lat: '',
      lon: ''
    }
    
  }

  getCoords() {
    const lat = this.state.lat;
    const lon = this.state.lon;
    this.props.getCoords(lat, lon)
  }

  componentDidMount() {

    GoogleMapsLoader.load((google) => {
      var map = new google.maps.Map(document.getElementById('map'), {
       center: { lat: -34.397, lng: 150.644 },
       zoom: 15
      })

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new window.google.maps.Marker({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          map: map,
          draggable: true,
          title: 'Hello World!'
        })

        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })

        this.getCoords();

        document.getElementById('test').innerHTML = '<p>Want to export: Current Lat: ' + position.coords.latitude + ' Current Lng: ' + position.coords.longitude + '</p>';
        map.setCenter(pos);

        //marker listeners
        window.google.maps.event.addListener(marker, 'dragstart', function () {
          console.log('marker dotkniety');
          document.getElementById('test').innerHTML = '<p>Currently dragging marker...</p>';
        });

        window.google.maps.event.addListener(marker, 'dragend', (e) => {
          console.log('marker upuszczony');
          document.getElementById('test').innerHTML = '<p>Want to export: Current Lat: ' + e.latLng.lat().toFixed(3) + ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>';
          console.log(this, 'this inside the event listener');

          this.setState(({
            lat: e.latLng.lat(),
            lon: e.latLng.lng()
          }))

          this.getCoords();
        });


      }, () => {
        this.handleLocationError(true, map.getCenter());
      });

    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, map.getCenter());
    }

    console.log('DID MOUNT');
    console.log(this);
    console.log(this.state);
  })}

  handleLocationError(browserHasGeolocation, pos, map) {}

  render() {

    return (

      <div>
        <div id='map' />
        <div id='test' />
      </div>
    )
  }
}
export default GoogleMap















