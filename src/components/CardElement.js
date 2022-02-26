import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
const Dots = () => {
  return (
    <View style={styles.dots}>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
    </View>
  );
};

export default function CardElement({user}) {
  const {name, cvv, expiry_date, year, card_number} = user;
  const [active, setActive] = useState(false);
  const cardNoPart = card_number?.split(' ');

  return (
    <View style={styles.conitaner}>
      <View style={styles.cardBox}>
        <View style={styles.switchBtnConitaner}>
          <TouchableOpacity
            style={styles.switchBtn}
            onPress={() => {
              setActive(!active);
            }}>
            <Image
              source={
                active
                  ? require('../assests/img/hideEye.png')
                  : require('../assests/img/remove_red_eye.png')
              }
            />
            <Text style={styles.switchBtnText}>
              {active ? 'Hide card number' : 'Show card number'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardBody}>
          <Image
            source={require('../assests/img/AspireLogo.png')}
            style={styles.logo}
          />
          <Text style={styles.cardHolderName}>Mark Henry</Text>
          <View style={styles.cardNumber}>
            {active ? (
              <>
                <Text style={styles.cardNumberText}>{cardNoPart[0]}</Text>
                <Text style={styles.cardNumberText}>{cardNoPart[1]}</Text>
                <Text style={styles.cardNumberText}>{cardNoPart[2]}</Text>
              </>
            ) : (
              <>
                <Dots />
                <Dots />
                <Dots />
              </>
            )}
            <Text style={styles.cardNumberText}>{year}</Text>
          </View>
          <View style={styles.cardExpiryCVV}>
            <Text style={styles.cardExpiryCVVText}>{expiry_date}</Text>
            <Text style={styles.cardExpiryCVVText}>
              CVV:{' '}
              {active ? (
                cvv
              ) : (
                <View style={styles.cvvHide}>
                  <Text style={styles.cvvHideText}>***</Text>
                </View>
              )}
            </Text>
          </View>

          <Image
            source={require('../assests/img/VisaLogo.png')}
            style={styles.cardTypeLogo}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conitaner: {
    padding: 24,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  cardBox: {
    marginTop: -120,
  },
  switchBtnConitaner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  switchBtn: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: 150,
    paddingTop: 8,
    paddingBottom: 18,
    marginBottom: -10,
  },
  switchBtnText: {
    color: '#01D167',
    fontSize: 12,
    marginLeft: 10,
  },
  cardBody: {
    backgroundColor: '#01D167',
    paddingTop: 60,
    padding: 24,
    borderRadius: 10,
    paddingBottom: 60,
    height: 200,
  },
  logo: {
    position: 'absolute',
    right: 24,
    top: 24,
  },
  cardHolderName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  cardNumber: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dots: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    margin: 4,
    borderRadius: 4,
  },
  cardNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 18,
    fontSize: 14,
    letterSpacing: 4,
  },
  cardExpiryCVV: {
    flexDirection: 'row',
  },
  cardExpiryCVVText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 20,
  },
  cardTypeLogo: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  cvvHide: {
    marginBottom: -14,
  },
  cvvHideText: {
    fontSize: 24,
    color: '#fff',
  },
});
