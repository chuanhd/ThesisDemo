import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions'
import { AnimationService, AnimatesDirective } from 'css-animator';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UIUIDemoPage } from '../pages/ui_and_ux/uiux'
import { UIUISignUpPage } from '../pages/sign_up/signup'
import { AnimationPage } from '../pages/animation/animation'
import { LayoutPage } from '../pages/layout/layout'
import { MapsPage } from '../pages/maps/maps'
import { ServicesPage } from '../pages/services/services'
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UIUIDemoPage,
  	UIUISignUpPage,
    AnimationPage,
	  LayoutPage,
    MapsPage,
    ServicesPage,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UIUIDemoPage,
	  UIUISignUpPage,
    AnimationPage,
	  LayoutPage,
    MapsPage,
    ServicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	  NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnimationService,
    GoogleMaps,
    ApiProvider
  ]
})
export class AppModule {}
