import { Link, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { useLocation } from 'react-router-dom';

function getLinkName(splitPathName: string) {
  if (splitPathName === 'dashboard') {
    return '대시보드';
  }
  return '대시보드';
}

function Breadcrumbs() {
  const { pathname } = useLocation();

  return (
    <MuiBreadcrumbs
      sx={{
        p: 2
      }}
    >
      <Link href="/" underline="hover" color="inherit">
        메인
      </Link>
      {pathname
        .split('/')
        .filter((splitPathName) => splitPathName)
        .map((splitPathName) => (
          <Link
            key={`link-${splitPathName}`}
            href={`/${splitPathName}`}
            underline="hover"
            color="inherit"
          >
            {getLinkName(splitPathName)}
          </Link>
        ))}
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
