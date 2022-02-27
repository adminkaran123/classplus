import { View, Text, StyleSheet, Image, Switch } from "react-native";
import React, { useState } from "react";
import { formatCurreny, getPercentage } from "../utils/functions";

export default function PercentageBar({ spent, spending_limit }) {
  return (
    <View style={styles.barContainer}>
      <View style={styles.barHeader}>
        <Text style={styles.barHeading}>Debit card spending limit</Text>
        <Text>
          <Text style={styles.remaining}>S$ {formatCurreny(spent)}</Text>{" "}
          <Text style={styles.total}>| S$ {formatCurreny(spending_limit)}</Text>
        </Text>
      </View>
      <View style={styles.bar}>
        <View
          style={{
            ...styles.barInner,
            width: getPercentage(spending_limit, spent) + "%",
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  barHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  barHeading: {
    fontSize: 13,
    color: "#222222",
    fontWeight: "500",
  },
  remaining: {
    color: "#01D167",
    fontSize: 13,
    fontWeight: "bold",
  },
  total: {
    color: "#22222233",
    fontWeight: "500",
  },
  bar: {
    backgroundColor: "rgba(1,209,103,.1)",
    height: 15,
    overflow: "hidden",
    borderRadius: 30,
  },
  barInner: {
    height: 15,
    backgroundColor: "#01D167",
  },
});
