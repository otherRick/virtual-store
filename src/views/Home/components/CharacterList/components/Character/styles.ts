import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    width: 400,
  },
  card: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20,
    width: '100%',
  },
  nameContainer: { flexDirection: 'row' },
  name: { fontSize: 15, fontWeight: 'bold' },
  genderContainer: { flexDirection: 'row' },
  area: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  status: {
    fontStyle: 'italic',
  },

  human: {
    color: 'blue',
    fontStyle: 'italic',
  },
  alien: {
    color: 'green',
    fontStyle: 'italic',
  },

  sellerPriceContainer: {
    position: 'absolute',
    right: 40,
    top: 50,
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sellerPriceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
