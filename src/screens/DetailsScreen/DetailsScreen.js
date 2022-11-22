import {Image, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import styles from './DetailsScreen.style';
class DetailsScreen extends Component {
  renderRowData = (leftText, rightText) => {
    return (
      <View key={leftText + rightText} style={styles.rowContainer}>
        <Text style={styles.leftText}>{leftText}</Text>
        <Text style={styles.rightText}>{rightText}</Text>
      </View>
    );
  };
  renderProfileImage = () => {
    return (
      <View style={styles.userProfileImageContainer}>
        <Image
          style={styles.userProfileImage}
          source={{uri: this.props.route.params.data.image}}
        />
      </View>
    );
  };
  renderProfileDetails = () => {
    const {name, status} = this.props.route.params.data;
    return (
      <View style={styles.profileDetailsContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    );
  };
  renderData = () => {
    const {
      id,
      species,
      type,
      gender,
      origin: {name: originName},
      location: {name: locationName},
      created,
      episode,
    } = this.props.route.params.data;
    const dataToBeRendered = {
      id,
      species,
      type,
      gender,
      origin: originName,
      location: locationName,
      created,
      episodeShowedUp: episode.length,
    };
    return Object.keys(dataToBeRendered).map(item =>
      this.renderRowData(item, dataToBeRendered[item]),
    );
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderProfileImage()}
        {this.renderProfileDetails()}
        {this.renderData()}
      </ScrollView>
    );
  }
}

export default DetailsScreen;
