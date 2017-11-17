import React, { Component } from 'react'
import Routes from './src/routes/routes'
import OneSignal from 'react-native-onesignal'
// OneSignal.setLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG);

export default class App extends Component {
  constructor(props) {
    super(props)
    this.onRegistered = this.onRegistered.bind(this)
    this.onIds = this.onIds.bind(this)
    this.onOpened = this.onOpened.bind(this)
    this.onReceived = this.onReceived.bind(this)
  }
  componentWillMount() {
    // OneSignal.configure()
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('ids', this.onIds)
  }
  onReceived(noti) {
    console.log('notification', noti)
  }

  onIds(ids) {
    console.log('recibiendo los ides', ids)
  }

  onOpened(open) {
    console.log('open notification', open)
  }
  onRegistered(notifData) {
    console.log("Device had been registered for push notifications!", notifData);
}

  render() {
    return  <Routes />
  }
}
