export const variants = {
  primary: {
    main: '#9155FD',
    light: '#9E69FD',
    dark: '#6E41C0',
    contrast: '#D6D6D6',
    containedHoverBg: '#804BDF',
    outlinedHoverBg: '#9155FD14',
    outlinedRestingBg: '#9155FD80',
  },
  secondary: {
    main: '#8A8D93',
    light: '#9C9FA4',
    dark: '#4D5056',
    contrast: '#D6D6D6',
    containedHoverBg: '#777B82',
    outlinedHoverBg: '#8A8D9314',
    outlinedRestingBg: '#8A8D9380',
  },
  info: {
    main: '#16B1FF',
    light: '#32BAFF',
    dark: '#0E71A3',
    contrast: '#D6D6D6',
    containedHoverBg: '#139CE0',
    outlinedHoverBg: '#32BAFF14',
    outlinedRestingBg: '#32BAFF80',
  },
  success: {
    main: '#56CA00',
    light: '#6AD01F',
    dark: '#378100',
    contrast: '#D6D6D6',
    containedHoverBg: '#4CB200',
    outlinedHoverBg: '#56CA0014',
    outlinedRestingBg: '#56CA0080',
  },
  warning: {
    main: '#FFB400',
    light: '#FFB547',
    dark: '#A37300',
    contrast: '#D6D6D6',
    containedHoverBg: '#E09E00',
    outlinedHoverBg: '#FFB40014',
    outlinedRestingBg: '#FFB40080',
  },
  error: {
    main: '#FF4C51',
    light: '#FF6166',
    dark: '#A33134',
    contrast: '#D6D6D6',
    containedHoverBg: '#E04347',
    outlinedHoverBg: '#FF4C5114',
    outlinedRestingBg: '#FF4C5180',
  },
};

export const typography = {
  main: '#000000',
  hover: '#E7E3FC0A',
  disabled: '#3A354161',
  secondary: '#000000',
};

export const misc = {
  background: '#F4F5FA',
  divider: '#3A35411F',
};

export const dark = {
  background: '#FFFFFF',
  other: '#3A354161',
};

export const theme = {
  token: {
    colorPrimary: variants.primary.main,
    colorError: variants.error.main,
    colorSuccess: variants.success.main,
    colorText: typography.main,
    fontFamily: 'Inter,system-ui,Avenir,Helvetica,Arial,sans-serif',
    green: variants.success.main,
    yellow: variants.warning.main,
    blue: variants.info.main,
  },
  components: {
    Button: {
      borderRadiusSM: 5,
      borderRadius: 5,
      borderRadiusLG: 5,
      colorBorder: variants.primary.outlinedRestingBg,
      colorText: variants.primary.main,
      colorError: variants.error.main,
      paddingContentHorizontalSM: 13,
      paddingContentVerticalSM: 4,
      paddingContentHorizontal: 22,
      paddingContentVertical: 7,
      paddingContentHorizontalLG: 26,
      paddingContentVerticalLG: 8,
      colorPrimaryHover: variants.primary.containedHoverBg,
    },
    Tag: {
      borderRadiusSM: 50,
      fontSizeSM: 12,
    },
    Typography: {
      colorText: typography.main,
      colorTextHeading: typography.main,
    },
    Divider: {
      colorSplit: misc.divider,
      fontSize: 12,
    },
    Radio: {
      fontSize: 16,
      colorText: typography.main,
    },
    Input: {
      colorBgContainer: dark.background,
      colorBorder: dark.other,
      colorText: typography.main,
      borderRadiusSM: 6,
      borderRadius: 6,
      borderRadiusLG: 6,
      fontSize: 16,
      colorTextPlaceholder: typography.disabled,
    },
    Card: {
      colorBgContainer: dark.background,
      colorText: typography.main,
      colorTextDescription: typography.secondary,
      fontSizeHeading1: 24,
    },
    Alert: {
      colorWarningBg: variants.warning.outlinedRestingBg,
    },
    Collapse: {
      colorText: typography.main,
      fontFamily: 'inherit',
    },
  },
};