import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FastImage from 'react-native-fast-image';

import {StyleSheet, Text, View} from 'react-native';

// Screens
import {
  PaymentScreen,
  HomeScreen,
  CreditScreen,
  ProfileScreen,
  DebitCardScreen,
  SpendLimitScreen,
} from '../screens';

// Screen names
const homeName = 'Home';
const paymentsName = 'Payment';
const cardName = 'Credit';
const profileName = 'Profile';
const debitCardName = 'debitCard';
const spendLimitName = 'spendLimit';

//stacks
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  const getActiveStyle = active => {
    return active ? '#01D167' : '#DDDDDD';
  };
  return (
    <Tab.Navigator initialRouteName={homeName}>
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabStyle}>
              <FastImage
                style={styles.tabIcon}
                source={require('../assests/img/Home.png')}
                tintColor={getActiveStyle(focused)}
              />
              <Text style={{...styles.tabText, color: getActiveStyle(focused)}}>
                Home
              </Text>
            </View>
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarVisible: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={debitCardName}
        component={DebitCardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabStyle}>
              <FastImage
                style={styles.tabIcon}
                source={require('../assests/img/Card.png')}
                tintColor={getActiveStyle(focused)}
              />
              <Text style={{...styles.tabText, color: getActiveStyle(focused)}}>
                Debit Card
              </Text>
            </View>
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarVisible: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={paymentsName}
        component={PaymentScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabStyle}>
              <FastImage
                style={styles.tabIcon}
                source={require('../assests/img/Payments.png')}
                tintColor={getActiveStyle(focused)}
              />
              <Text style={{...styles.tabText, color: getActiveStyle(focused)}}>
                Payments
              </Text>
            </View>
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarVisible: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={cardName}
        component={CreditScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabStyle}>
              <FastImage
                style={styles.tabIcon}
                source={require('../assests/img/Credit.png')}
                tintColor={getActiveStyle(focused)}
              />
              <Text style={{...styles.tabText, color: getActiveStyle(focused)}}>
                Credit
              </Text>
            </View>
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarVisible: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabStyle}>
              <FastImage
                style={styles.tabIcon}
                source={require('../assests/img/Account.png')}
                tintColor={getActiveStyle(focused)}
              />
              <Text style={{...styles.tabText, color: getActiveStyle(focused)}}>
                Profile
              </Text>
            </View>
          ),
          tabBarLabel: () => {
            return null;
          },
          tabBarVisible: true,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function MainContainer() {
  const getActiveStyle = active => {
    return active ? '#01D167' : '#DDDDDD';
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'home'}
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={spendLimitName}
            component={SpendLimitScreen}
            options={{
              headerShown: false,
              tabBarVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
  TabStyle: {
    alignItems: 'center',
    width: '100%',
  },
  tabText: {
    fontSize: 9,
    letterSpacing: 0.4,
  },
});

export default MainContainer;
