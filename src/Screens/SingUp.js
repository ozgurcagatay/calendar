import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { _userSeviye } from '../../Data';

const w = Dimensions.get('window').width


function SignUp() {


    const navigation = useNavigation();


    const [uName, setuName] = useState('');
    const [pword, setpword] = useState('');
    const [adSoyad, setAdSoyad] = useState('');
    const [tc, setTC] = useState('');
    const [telefon, setTelefon] = useState('');
    const [adres, setAdres] = useState('');
    const [email, setEmail] = useState('');
    const [seviye, setSeviye] = useState('');

let _uArray = [{'uName':uName,'pword': pword,'adsoyad':adSoyad,'tc':tc,'telefon': telefon,'adres':adres,'email':email,'seviye':seviye}]
///_uName: uName, _upword: pword, _tc: tc, _adsoyad: adSoyad, _email: email, _adres: adres, _telefon: telefon, _seviye: seviye

    return (
        <ScrollView>


            <View style={{ flex: 2 }}>
                <TextInput
                    placeholder='Kullanıcı Adı'
                    onChangeText={((text) => setuName(text))}
                    value={uName}
                    style={styles.txtInput}
                />

                <TextInput
                    placeholder='TC Kimlik No'
                    onChangeText={((text) => setTC(text))}
                    value={tc}
                    style={styles.txtInput}
                />

                <TextInput
                    placeholder='Adı Soyadı'
                    onChangeText={((text) => setAdSoyad(text))}
                    value={adSoyad}
                    style={styles.txtInput}
                />
                <TextInput
                    placeholder='E-Mail'
                    onChangeText={((text) => setEmail(text))}
                    value={email}
                    style={styles.txtInput}
                />

                <TextInput
                    placeholder='Telefon'
                    onChangeText={((text) => setTelefon(text))}
                    value={telefon}
                    style={styles.txtInput}
                />

                <TextInput
                    placeholder='Adres'
                    onChangeText={((text) => setAdres(text))}
                    value={adres}
                    style={styles.txtInput}
                />

            
                        <SelectList 
                        setSelected={(val) => setSeviye(val)} 
                        data={_userSeviye} 
                        save="value"
                        placeholder="Kullanıcı Tipi"
                        search={false}
                        inputStyles={{fontSize:20,color:'#666'}}
                        boxStyles={[styles.txtInput,{borderWidth:0,alignItems:'center'}]}
                        dropdownStyles={{backgroundColor:'#fff',borderWidth:0,width:w*0.95,alignSelf:'center', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,}}
                    />
        


                <TextInput
                    secureTextEntry={true}
                    placeholder='Şifre'
                    onChangeText={((text) => setpword(text))}
                    value={pword}
                    style={styles.txtInput}
                />

                <TouchableOpacity style={styles.btnL}
                    onPress={() => navigation.navigate('Login', { _uArray })}>
                    <Text style={styles.txtL}>Kayıt</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default SignUp


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' },
    btnL: {
        width: w * 0.95, backgroundColor: '#6699ff', height: 60, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnS: {
        width: w * 0.95, backgroundColor: '#fff', height: 60, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txtL: { fontSize: 20, textAlign: 'center', color: '#fff', fontWeight: '500' },
    txtS: { fontSize: 20, textAlign: 'center', color: '#3c3c3b', fontWeight: '500' },
    txtInput: {
        width: w * 0.95, 
        backgroundColor: '#fff', marginTop: 10, paddingLeft: 15, height: 60, borderRadius: 12, alignSelf: 'center', fontSize: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }

})
