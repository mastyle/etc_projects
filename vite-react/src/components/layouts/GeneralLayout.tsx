import { PropsWithChildren, ReactElement } from 'react';

import { styled } from '@mui/material/styles';

interface GeneralLayoutProps {
  breadcrumbs?: ReactElement;
  header?: ReactElement;
  leftSide?: ReactElement;
}

function GeneralLayout({
  children,
  breadcrumbs,
  header,
  leftSide
}: PropsWithChildren<GeneralLayoutProps>) {
  return (
    <StyledGeneralLayout>
      {leftSide}
      <Content>
        {header}
        {breadcrumbs}
        {children}
      </Content>
    </StyledGeneralLayout>
  );
}

const StyledGeneralLayout = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = styled('main')`
  flex-grow: 1;
  overflow-y: auto;
  border-left: 1px solid
    ${({
      theme: {
        palette: { divider }
      }
    }) => divider};
`;

export default GeneralLayout;
