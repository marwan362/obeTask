import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingVertical: 20,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 70,
  },
  leftText: {
    color: 'grey',
    fontSize: 17,
  },
  rightText: {
    color: 'blue',
    fontSize: 16,
  },
  userProfileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userProfileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  nameText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 17,
    color: 'grey',
  },
});
