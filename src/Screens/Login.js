import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { _userData } from "../../Data";

const w = Dimensions.get("window").width;

function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  const _uArray = route?.params?._uArray;

  const [uName, setuName] = useState("");
  const [pword, setpword] = useState("");

  const handleControl = (uName, pword) => {
    // kullanıcı adı boş olmamalı kontrolü
    if (!uName) return alert("Kullanıcı Adı Boş Olamaz !");
    // şifre boş olmamalı kontrolü
    if (!pword) return alert("Şifre Boş Olamaz !");

    let newArray = _userData;
    //manüpüle db deki kullanıcılar ile yeni array oluşturma
    if (
      _uArray !== undefined &&
      newArray.filter((f) => f.uName !== _uArray[0].uName)
    )
      // yeni kullanıcı kaydı ile manüpüle dbye kullanıcıyı gönderme
      newArray.push(_uArray[0]);
    console.log(newArray); // arrayin son hali
    //daha önce ekli kullanıcı war ise ekleme

    let getUser = newArray.filter(
      (aa) => aa?.uName == uName && aa?.pword == pword
    );

    try {
      if (getUser.length > 0) return navigation.navigate("CustomCalendar");
      else return alert("Kullanıcı Adı veya Şifre Yanlış ! ");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: "#3c3c3b", fontWeight: "500" }}>
          2. Dönem Bilmem ne dersi
        </Text>
        <Text style={{ fontSize: 12, color: "#3d3d3d" }}>
          Falanca filanca Projesi
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          placeholder="Kullanıcı Adı"
          onChangeText={(text) => setuName(text)}
          value={uName}
          style={styles.txtInput}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Şifre"
          onChangeText={(text) => setpword(text)}
          value={pword}
          style={styles.txtInput}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <View style={{}}>
          <TouchableOpacity
            style={styles.btnL}
            onPress={() => handleControl(uName, pword)}
          >
            <Text style={styles.txtL}>Giriş</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnS}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.txtS}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  btnL: {
    width: w * 0.95,
    backgroundColor: "#6699ff",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 12,
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
    width: w * 0.95,
    backgroundColor: "#fff",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtL: { fontSize: 20, textAlign: "center", color: "#fff", fontWeight: "500" },
  txtS: {
    fontSize: 20,
    textAlign: "center",
    color: "#3c3c3b",
    fontWeight: "500",
  },
  txtInput: {
    width: w * 0.95,
    backgroundColor: "#fff",
    marginTop: 10,
    paddingLeft: 15,
    height: 60,
    borderRadius: 12,
    alignSelf: "center",
    fontSize: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
