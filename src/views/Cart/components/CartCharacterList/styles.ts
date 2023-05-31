import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    gap: 40,
    marginTop: 40,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
  },
  nameContainer: {
    textAlign: 'left',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  image: { marginBottom: 10, marginLeft: 20 },
  removeButton: {
    marginBottom: 300,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#DEDEDE',
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
  removeButtonText: { alignItems: 'center' },
});
