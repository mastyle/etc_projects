import GeneralLayout from '@components/layouts/GeneralLayout';
import { MainButtonList, MainImage } from '@components/pages/main';
import { Header, LeftSideMenuList } from '@components/UI/molecules';

function Index() {
  return (
    <GeneralLayout leftSide={<LeftSideMenuList />} header={<Header />}>
      <MainImage />
      <MainButtonList />
    </GeneralLayout>
  );
}

export default Index;
