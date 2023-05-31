import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F8F1F8',
  },
  cartRedDot: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
  cart: { marginRight: 4 },
  numberOfItems: {
    fontSize: 10,
    marginLeft: 1,
    color: 'white',
    fontWeight: 'bold',
  },
});
