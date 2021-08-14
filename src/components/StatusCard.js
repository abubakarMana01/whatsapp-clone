import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import moment from 'moment';

import { colors } from '../config';

const StatusCard = ({data}) => {
  return (
    <TouchableHighlight underlayColor={colors.mediumLight} onPress={() => {}}>
    <View style={styles.card}>
      <View style={styles.lastStatusThumbnail}>
        <Image style={styles.thumbnail} source={{uri: data.imageUri}} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.time}>{moment(data.createdAt).fromNow()}</Text>
      </View>
    </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
   },
  lastStatusThumbnail: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 25,
    overflow: 'hidden',
    borderColor: colors.darkgrey,
    borderWidth: 2,
    padding: 2
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  userInfo: {
    flex: 1,
    marginLeft: 10
  },
  name: {
    fontSize: 16,
    fontWeight: '700'
  },
  time: {
    color: colors.darkgrey
  }
})

export default StatusCard;