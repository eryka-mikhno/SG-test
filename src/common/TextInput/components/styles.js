import appColors from 'src/common/styles/colors';

export default {
  input: {
    height: 44,
    width: '90%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: appColors.secondary,
    borderRadius: 22,
    backgroundColor: appColors.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    color: appColors.primary,
  },
  active: {
    borderColor: appColors.primary,
  },
};
