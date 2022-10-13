import React, {PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components';

import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '.';

const CustomThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
