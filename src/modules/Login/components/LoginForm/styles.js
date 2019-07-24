import appColors from 'src/common/styles/colors';

export default {
  container: {
    flex: 1,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 44,
    width: '90%',
    borderRadius: 22,
    backgroundColor: appColors.primary,
    paddingVertical: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    color: appColors.background,
  },
};
