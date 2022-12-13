
import React, { useEffect } from 'react';
import { SafeAreaView,} from 'react-native';
import Signin from './src/screens/auth/Signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";




const WEB_CLIENT_ID = '713740000553-8ee2r2ge80q0tp1et3rpjj7a97hrpu1j.apps.googleusercontent.com'
const IOS_CLIENT_ID = '7713740000553-8feprej2emtcqdv1lmfae0mlflosqab4.apps.googleusercontent.com'
// Reversed client ID for google API
// com.googleusercontent.apps.713740000553-8feprej2emtcqdv1lmfae0mlflosqab4




const App = () => {
  useEffect; {()=> {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: Config.IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      
    });
    
  }, []}

  return (
    <SafeAreaView>
      <Signin />
   </SafeAreaView>
  );
};



export default App;
