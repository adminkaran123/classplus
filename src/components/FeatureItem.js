import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function FeatureItem({
  title,
  subtitle,
  img,
  swith = false,
  onPress,
}) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image source={img} style={styles.itemLogo} />
      <View style={styles.itemContent}>
        <Text style={styles.itemContentTitle}>{title}</Text>
        <Text style={styles.itemContentSubtitle}>{subtitle}</Text>
      </View>
      {swith && (
        <View style={styles.switchBox}>
          <Switch
            trackColor={{false: '#EEEEEE', true: '#01D167'}}
            thumbColor={isEnabled ? '#fffff' : '#FFFFFF'}
            ios_backgroundColor="#EEEEEE"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 24,
    flexDirection: 'row',
    width: '100%',
  },
  itemContentTitle: {
    color: '#25345F',
    fontSize: 14,
    fontWeight: '500',
  },
  itemLogo: {
    marginRight: 10,
  },
  itemContentSubtitle: {
    fontSize: 13,
    color: '#222222',
    opacity: 0.4,
  },
  switchBox: {
    position: 'absolute',
    top: 24,
    right: 24,
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
});
