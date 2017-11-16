import React, { Component } from 'react'
import Routes from './src/routes/routes'
import OneSignal from 'react-native-onesignal'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.onRegistered = this.onRegistered.bind(this)
  }
  componentWillMount() {
    // OneSignal.addEventListener('received', this.onReceived);
    // OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    // OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('registered', this.onRegistered);
  }
  onRegistered(notifData) {
    console.log("Device had been registered for push notifications!", notifData);
}

  render() {
    return  <Routes />
  }
}
