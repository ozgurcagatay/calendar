import React,{useState} from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { Calendar, LocaleConfig,CalendarList } from 'react-native-calendars';
import TimelineCalendarScreen from '../Components/Comp';

const w = Dimensions.get('window').width

function CustomCalender(params) {

    LocaleConfig.locales['tr'] = {
        monthNames: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık'
        ],
        monthNamesShort: ['Ock.', 'Şbt', 'Mrt', 'nsn', 'May', 'Haz', 'Tem', 'Ağus', 'Eyl', 'Ekm', 'Kas', 'Ara'],
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Pzr', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cmt'],
        today: "Bugün"
      };
      LocaleConfig.defaultLocale = 'tr';

    const [selected, setSelected] = useState('');
    return (
        <View style={{ flex:1}}>
           <TimelineCalendarScreen/>

        </View>
    )
}

export default CustomCalender