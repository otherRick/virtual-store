import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
  },
  cartRedDot: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 100,
    top: 0,
    right: 0,
  },
});
