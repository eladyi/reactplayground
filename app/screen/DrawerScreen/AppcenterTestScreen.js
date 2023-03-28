
import React from 'react';
import { Text, View, TouchableOpacity, style, TextInput, Alert } from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';


const AppcenterTestScreen = () => {

  const [text, setOnChangeText] = React.useState('');

  sendAnalitics = () => {
    Analytics.trackEvent(text);
    setOnChangeText("")
  }
  isAnaliticsBtnDisabled = () => {
    return text.length == 0;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>

      <TouchableOpacity style={{ width: '70%', height: 50, backgroundColor: "darkgrey", justifyContent: 'center', borderRadius: 5 }} onPress={() => { Crashes.generateTestCrash() }}>
        <Text style={{ textAlign: 'center' }}>Genarate crash</Text>
      </TouchableOpacity>


      <TouchableOpacity disabled={isAnaliticsBtnDisabled()} style={{ width: '70%', marginTop: 30, height: 50, backgroundColor: text.length == 0 ? 'gray' : 'darkgrey', justifyContent: 'center', borderRadius: 5 }} onPress={() => { sendAnalitics() }}>
        <Text style={{ textAlign: 'center' }}> Send Analytics</Text>
      </TouchableOpacity>

      <TextInput
        style={{ marginTop: 10, textAlign: 'left' }}
        onChangeText={setOnChangeText}
        value={text}
        placeholder="Set Anlitics To Report"
      />
      
    </View>
  );
}
export default AppcenterTestScreen;


