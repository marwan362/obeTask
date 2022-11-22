import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width * 0.8,
    minHeight: 150,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },
  messageText: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
