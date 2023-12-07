import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/navigation';
import Header from '../components/header/Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`;

// Ensure page content is scrollable, but the sidebar and header are not
// 60px is the height of the header
const DashBase = styled.div`
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`;

const Dashboard= () => {
  return (
    <Grid>
      <Navigation />
      <div>
        <Header />
        <DashBase>
          <Outlet />
        </DashBase>
      </div>
    </Grid>
  );
};

export { Dashboard};