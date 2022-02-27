import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import {
  CardElement,
  CardHeader,
  FeatureList,
  PercentageBar,
  Loader,
} from "../components";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchUserInfo } from "../models/user/actions";

function DebitCardScreen({ navigation, user, isLoading }) {
  const { limit, spending_limit, spent } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CardHeader limit={limit} />
        <CardElement user={user} />

        <PercentageBar spent={spent} spending_limit={spending_limit} />
        <FeatureList navigation={navigation} spending_limit={spending_limit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(DebitCardScreen);
