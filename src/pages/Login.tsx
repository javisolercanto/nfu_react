import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonInput, IonItem, IonButton, IonSegment, IonSegmentButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
import { logoFacebook, logoGoogle, logoTwitch, logoTwitter } from 'ionicons/icons';

interface IProps {}
interface IState {
  loading?: boolean;
  mode?: string;
  stage?: boolean;
  username?: '';
  email?: '';
  password?: '';
}

class Login extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      loading: true,
      mode: 'login',
      stage: false,
      username: '',
      email: '',
      password: '',
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="login">
          <div className="login__panel  login__panel--left">
            <h2>NFU</h2>
            <p>NFU Allows us to join another sports group created by people who's searching people to play and complete the teams. NFU Allows us to join another sports group created by people who's searching people to play and complete the teams.
            NFU Allows us to join another sports group created by people who's searching people to play and complete the teams. NFU Allows us to join another sports group created by people who's searching people to play and complete the teams.
            </p>
            <p>NFU Allows us to join another sports group created by people who's searching people to play and complete the teams. NFU Allows us to join another sports group created by people who's searching people to play and complete the teams.
            </p>
          </div>
          <div className="login__panel  login__panel--right">
            <IonSegment className="login__panel--segment" value={this.state.mode} onIonChange={e => this.setState({mode: e.detail.value})}>
              <IonSegmentButton className="login__item-native" value="login">
                <IonLabel>Login</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className="login__item-native" value="register">
                <IonLabel>Register</IonLabel>
              </IonSegmentButton>
            </IonSegment>
            <div className="login__panel  login__panel--form">
              <IonItem className="login__input  login__item-native" style={{display: (this.state.stage && this.state.mode !== 'login') ? 'none' : 'block'}}>
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem  className="login__input  login__item-native" style={{display: (this.state.stage || this.state.mode === 'login') ? 'none' : 'block'}}>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
              <IonItem  className="login__input  login__item-native" style={{display: (this.state.stage && this.state.mode !== 'login') ? 'none' : 'block'}}>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
              <IonItem  className="login__input  login__item-native" style={{display: (!this.state.stage || this.state.mode === 'login') ? 'none' : 'block'}}>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem  className="login__input  login__item-native" style={{display: (!this.state.stage || this.state.mode === 'login') ? 'none' : 'block'}}>
                <IonLabel position="floating">City</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem  className="login__input  login__item-native" style={{display: (!this.state.stage || this.state.mode === 'login') ? 'none' : 'block'}}>
                <IonLabel position="floating">State</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
              <div className="login__buttonContainer">
                <IonButton className="login__button  login__button--tiny" style={{display: (this.state.mode === 'login' || !this.state.stage) && 'none'}} color="success" onClick={() => this.setState({stage: !this.state.stage})}>Back</IonButton>
                <IonButton className="login__button" color="success" onClick={() => this.state.mode === 'login' ? console.log('home') : this.setState({stage: !this.state.stage})}>
                  {(!this.state.stage && this.state.mode !== 'login') ? 'Next step': this.state.mode}</IonButton>
              </div>
              <div className="login__socials" style={{display: (this.state.mode === 'login') ? 'flex' : 'none'}}>
                <IonIcon className="social" icon={logoGoogle} color="primary" />
                <IonIcon className="social" icon={logoFacebook} color="primary" />
                <IonIcon className="social" icon={logoTwitter} color="primary" />
              </div>
            </div>
          </div>
      </div>
    )}
};

export default Login;
