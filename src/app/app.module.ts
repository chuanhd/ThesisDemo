import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UIUIDemoPage } from '../pages/ui_and_ux/uiux'
import { UIUISignUpPage } from '../pages/sign_up/signup'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UIUIDemoPage,
	UIUISignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UIUIDemoPage,
	UIUISignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
