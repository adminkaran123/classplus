import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import CurrencyInput from "react-native-currency-input";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { updateUser } from "../models/user/actions";

const DefaultAmount = ({ value = "5000", onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.defaultAmount}>
      <Text style={styles.defaultAmountText}>S$ {value}</Text>
    </TouchableOpacity>
  );
};
function SpendLimitScreen({ navigation, user }) {
  const { spending_limit } = user;
  const [value, setValue] = React.useState(spending_limit); // can also be null
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../assests/img/left.png")}
              style={styles.backImage}
            />
          </TouchableOpacity>
          <Image
            source={require("../assests/img/Logo.png")}
            style={styles.logo}
          />
          <Text style={styles.heading}>Spending limit</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formContainerBody}>
            <View style={styles.inputHeader}>
              <Image source={require("../assests/img/limitIcon.png")} />
              <Text style={styles.inputHeaderTxt}>
                Set a weekly debit card spending limit
              </Text>
            </View>
            <View style={styles.inputArea}>
              <Text style={styles.currency}>S$</Text>
              <CurrencyInput
                value={value}
                onChangeValue={setValue}
                unit="$"
                delimiter=","
                separator="."
                precision={0}
                style={styles.input}
                onChangeText={(formattedValue) => {
                  console.log(formattedValue); // $2,310.46
                }}
              />
            </View>
            <Text style={styles.subheading}>
              Here weekly means the last 7 days - not the calendar week
            </Text>
            <View style={styles.defaultRow}>
              <DefaultAmount
                value="5,000"
                onPress={() => {
                  setValue(5000);
                }}
              />
              <DefaultAmount
                value="10,000"
                onPress={() => {
                  setValue(10000);
                }}
              />
              <DefaultAmount
                value="20,000"
                onPress={() => {
                  setValue(20000);
                }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                ...styles.submitButton,
                backgroundColor: !Boolean(value) ? "#EEEEEE" : "#01D167",
              }}
              disabled={!Boolean(value)}
              onPress={() => {
                dispatch(updateUser(value));
                navigation.goBack();
              }}
            >
              <Text style={styles.submitButtonTxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(SpendLimitScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    backgroundColor: "#0C365A",
    paddingTop: 75,
    padding: 24,
    height: 160,
  },
  backButton: {
    position: "absolute",
    top: 24,
    left: 24,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  logo: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingTop: 30,
    justifyContent: "space-between",
    flex: 1,
  },
  inputHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputHeaderTxt: {
    fontSize: 14,
    color: "#222222",
    marginLeft: 10,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingBottom: 10,
    marginBottom: 20,
  },
  currency: {
    backgroundColor: "#01D167",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
    marginRight: 10,
    fontSize: 12,
    borderRadius: 4,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5,
    overflow: "hidden",
  },

  input: {
    borderWidth: 0,
    fontSize: 24,
    fontWeight: "bold",
    minWidth: 100,
  },
  subheading: {
    fontSize: 12,
    color: "#22222266",
    marginBottom: 20,
  },
  defaultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  defaultAmount: {
    backgroundColor: "rgba(1,209,103,.07)",
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: "30%",
  },
  defaultAmountText: {
    color: "#01D167",
    fontSize: 12,
    textAlign: "center",
  },
  buttonContainer: {
    padding: 24,
  },
  submitButton: {
    backgroundColor: "#01D167",
    padding: 15,
    borderRadius: 30,
    shadowColor: "#0000001F",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  submitButtonTxt: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
