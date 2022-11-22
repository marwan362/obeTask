import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: isEmpty => ({
    paddingHorizontal: 10,
    ...(isEmpty && {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }),
  }),
  userLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textUserContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  primaryUserText: {
    fontSize: 17,
  },
  secondaryUserText: {
    color: 'grey',
  },
  detailsUser: {
    flexDirection: 'row',
  },
  numberOfAppearanceContainer: {
    backgroundColor: 'grey',
    marginLeft: 'auto',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberOfAppearance: {
    color: 'white',
  },
  textEmptyComponent: {
    fontSize: 20,
  },
});
