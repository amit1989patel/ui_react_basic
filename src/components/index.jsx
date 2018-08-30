import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import counterpart from 'counterpart';
import translate from 'counterpart';
import Translate from 'react-translate-component';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.min.css';
import '../css/sidebar.css';
import '../css/progress-wizard.min.css';
import '../images/danablue.gif';
import ProgressBar from 'react-progress-bar-plus';
counterpart.registerTranslations('en', require('../locales/en'));
counterpart.registerTranslations('id', require('../locales/id'));
let map, marker, myLatlng, mapOptions, geoCoder, searchBtn;
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent: -1,
      intervalTime: 200,
      locale: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.setPercent = this.setPercent.bind(this);
    this.start = this.start.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }
  componentDidMount() {
    this.setPercent(100);
    this.getCurrentLocation();
  }
  componentWillMount() {
    const locale = translate('layout');
    this.setState({
      locale: locale
    })
  }
  getCurrentLocation() {
    debugger
    //If brower supports HTML5 geoLocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var accuracy = position.coords.accuracy;
        var coords = new google.maps.LatLng(lat, lng);
        //Remove previously added marker
        if (marker) {
          marker.setMap(null);
        }

        console.log(lat)
        console.log(lng)
        console.log(accuracy)
        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);
        localStorage.setItem('accuracy',accuracy);
        //   var popupContent = '<div id="content"><h1 id="firstHeading" className="heading">location....</h1></div>'
        //   var infowindow = new google.maps.InfoWindow({
        //     content: popupContent
        //   });
        //   marker = new google.maps.Marker({
        //       map: map,
        //       zoom: 14,
        //       position: currentLoc
        //   });
        //   infowindow.open(map,marker);
      });
    }
    // else {
    //   alert('This Browser doesn\'t support HTML5 geolocation');
    // }
  }
  setPercent(percent) {
    this.setState({
      percent: percent
    });
  }
  start() {
    this.setState({
      percent: 0,
      intervalTime: (Math.random() * 1000)
    });
  }
  handleChange(e) {
    counterpart.setLocale(e.target.value);
    const locale = translate('layout');
    this.setState({
      locale: locale
    })
  }
  //Current location click event

  render() {
    return (
      <div className="language">
        <ProgressBar percent={this.state.percent}
          autoIncrement={true}
          intervalTime={this.state.intervalTime}
          spinner={false} />
        {React.cloneElement(this.props.children, { percent: this.state.percent, start: this.start, setPercent: this.setPercent, locale: this.state.locale })}
      </div>
    );
  }
}

export default Index;