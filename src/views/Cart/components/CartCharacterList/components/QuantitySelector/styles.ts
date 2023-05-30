import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { alignItems: 'center', position: 'absolute', right: 10, gap: 10 },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 2,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  selectorContainer: { flexDirection: 'row', alignItems: 'center' },
  selectorNumber: { padding: 5, fontSize: 20 },
  remove: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  priceContainer: {
    position: 'absolute',
    left: -199,
    padding: 5,
    width: 150,
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
  priceText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
