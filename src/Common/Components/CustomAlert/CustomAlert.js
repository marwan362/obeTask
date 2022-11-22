import {Text, View, Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import styles from './CustomAlert.style';

export default class CustomAlert extends Component {
  state = {
    isVisible: false,
    title: '',
    message: '',
  };
  toggleAlert = (title, message) => {
    this.setState({isVisible: !this.state.isVisible, title, message});
  };
  render() {
    const {isVisible, title, message} = this.state;
    return (
      isVisible && (
        <Modal transparent>
          <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.alertContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.messageText}>{message}</Text>
              <TouchableOpacity
                onPress={this.toggleAlert}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      )
    );
  }
}
