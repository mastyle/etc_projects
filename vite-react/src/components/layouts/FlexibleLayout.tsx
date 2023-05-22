import { PropsWithChildren } from 'react';

import { CSSObject } from '@mui/material';
import { styled } from '@mui/material/styles';

interface FlexibleLayoutProps {
  centered?: boolean;
}

function FlexibleLayout({ children, centered }: PropsWithChildren<FlexibleLayoutProps>) {
  return <StyledFlexibleLayout centered={centered}>{children}</StyledFlexibleLayout>;
}

const StyledFlexibleLayout = styled('div')<{ centered?: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;

  ${({ centered }): CSSObject =>
    centered
      ? {
          alignItems: 'center',
          justifyContent: 'center'
        }
      : {}}
`;

export default FlexibleLayout;
