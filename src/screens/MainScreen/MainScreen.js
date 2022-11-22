import {
  SafeAreaView,
  Text,
  FlatList,
  Button,
  View,
  ActivityIndicator,
  RefreshControl,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './MainScreen.style';
import {
  getCharacters,
  getInitialCharacters,
  resetDefaultCharacters,
} from '../../redux/actions/characters-actions';
import CustomAlert from '../../Common/Components/CustomAlert/CustomAlert';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.alertRef = React.createRef(null);
  }
  onCharacterPress = data => {
    this.props.navigation.navigate('DetailsScreen', {data});
  };
  renderItem = ({item: {name, status, image, episode}, index}) => {
    const results = this.props.Characters.data.results;
    return (
      <>
        <TouchableOpacity
          style={styles.userContainer}
          onPress={() => this.onCharacterPress(results[index])}>
          <Image style={styles.userLogo} source={{uri: image}} />
          <View style={styles.textUserContainer}>
            <Text style={styles.primaryUserText}>{name}</Text>
            <View style={styles.detailsUser}>
              <Text style={styles.secondaryUserText}>{status}</Text>
              <View style={styles.numberOfAppearanceContainer}>
                <Text style={styles.numberOfAppearance}>{episode?.length}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {results.length - 1 === index && this.renderActivityIndicator()}
      </>
    );
  };
  onResetButtonPress = () => {
    this.props.resetDefaultCharacters();
    this.alertRef.current.toggleAlert('Info', 'All data have been reset');
  };
  renderResetButton = () => {
    return <Button title="Reset" onPress={this.onResetButtonPress} />;
  };
  renderActivityIndicator = () => {
    const {isLoading} = this.props.Characters;
    return isLoading && <ActivityIndicator />;
  };
  renderListEmptyComponent = () => {
    return <Text style={styles.textEmptyComponent}>Pull to load data</Text>;
  };
  renderRefreshControl = (onRefresh, isLoading) => {
    return (
      <RefreshControl onRefresh={() => onRefresh(1)} refreshing={isLoading} />
    );
  };
  renderFlatList = () => {
    const {
      isLoading,
      data: {results},
    } = this.props.Characters;
    return (
      <FlatList
        data={results}
        ListHeaderComponent={this.renderActivityIndicator}
        contentContainerStyle={styles.flatListContent(results.length === 0)}
        ListEmptyComponent={this.renderListEmptyComponent()}
        renderItem={this.renderItem}
        keyExtractor={({id}) => id}
        refreshControl={this.renderRefreshControl(
          this.props.getInitialCharacters,
          isLoading,
        )}
        onEndReached={this.props.getCharacters}
      />
    );
  };
  renderErrorAlert = () => {
    const {error} = this.props.Characters;
    if (error !== null) {
      Alert.alert(
        'Error',
        error.message,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderResetButton()}
        {this.renderFlatList()}
        {this.renderErrorAlert()}
        <CustomAlert ref={this.alertRef} />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    Characters: state.Characters,
  };
};

export default connect(mapStateToProps, {
  getCharacters,
  resetDefaultCharacters,
  getInitialCharacters,
})(MainScreen);
