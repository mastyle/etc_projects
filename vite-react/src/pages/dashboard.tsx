import GeneralLayout from '@components/layouts/GeneralLayout';
import { DashBoardUserTable } from '@components/pages/dashboard';
import { Breadcrumbs, Header, LeftSideMenuList } from '@components/UI/molecules';

function Dashboard() {
  return (
    <GeneralLayout
      leftSide={<LeftSideMenuList />}
      breadcrumbs={<Breadcrumbs />}
      header={<Header />}
    >
      <DashBoardUserTable />
    </GeneralLayout>
  );
}

export default Dashboard;
