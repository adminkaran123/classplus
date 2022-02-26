import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import FeatureItem from './FeatureItem';
import {formatCurreny} from '../utils/functions';

export default function FeatureList({navigation, spending_limit}) {
  return (
    <View style={styles.conitaner}>
      <ScrollView>
        <FeatureItem
          title="Top-up account"
          subtitle="Deposit money to your account to use with card"
          img={require('../assests/img/insight.png')}
        />
        <FeatureItem
          title="Weekly spending limit"
          subtitle={`Your weekly spending limit is S$ ${formatCurreny(
            spending_limit,
          )}`}
          onPress={() => {
            navigation.navigate('spendLimit');
          }}
          img={require('../assests/img/insight.png')}
          swith={true}
        />
        <FeatureItem
          title="Freeze card"
          subtitle="Your debit card is currently active"
          img={require('../assests/img/insight.png')}
          swith={true}
        />
        <FeatureItem
          title="Get a new card"
          subtitle="This deactivates your current debit card"
          img={require('../assests/img/insight.png')}
        />
        <FeatureItem
          title="Deactivated cards"
          subtitle="Your previously deactivated cards"
          img={require('../assests/img/insight.png')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conitaner: {
    backgroundColor: '#fff',
  },
});
