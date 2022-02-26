import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {formatCurreny} from '../utils/functions';

export default function CardHeader({limit}) {
  return (
    <View style={styles.conitaner}>
      <Image source={require('../assests/img/Logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Debit Card</Text>
      <Text style={styles.subheading}>Available balance</Text>
      <View style={styles.balance}>
        <Text style={styles.currency}>S$</Text>
        <Text style={styles.balanceText}>{formatCurreny(limit)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conitaner: {
    backgroundColor: '#0C365A',
    paddingTop: 35,
    padding: 24,
    height: 260,
  },
  logo: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    backgroundColor: '#01D167',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
    marginRight: 10,
    fontSize: 12,
    borderRadius: 4,
    color: '#fff',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
