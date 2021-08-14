import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, BackHandler, FlatList, TouchableHighlight } from "react-native";
import moment from 'moment'

import statusData from "../data/statusData";
import StatusCard from '../components/StatusCard';
import { colors } from "../config";


const MyStatusCard = ({data}) => (
  <TouchableHighlight underlayColor={colors.mediumLight} onPress={() => {}}>
  <View style={styles.card}>
      <View style={styles.lastStatusThumbnail}>
        <Image style={styles.thumbnail} source={{uri: data.imageUri}} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>My status</Text>
        <Text style={styles.time}>{moment(data.createdAt).fromNow()}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

const StatusScreen = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Chats");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View>
      <FlatList ListHeaderComponent={() => (
        <MyStatusCard data={statusData[0]} />
      )} keyExtractor={(item) => item.id} data={statusData} renderItem={({item}) => (
        <StatusCard data={item} />
      )} />
    </View>
  );
};

export default StatusScreen;

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
});
