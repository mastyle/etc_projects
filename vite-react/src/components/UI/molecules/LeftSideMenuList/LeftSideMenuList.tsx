import { MouseEvent, useContext, useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Collapse,
  Dialog,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import sessionContext from '@context/SessionContext';

function LeftSideMenuList() {
  const navigate = useNavigate();

  const [hasSession] = useContext(sessionContext);

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => setOpen(!open);

  const handleClickLogo = () => navigate('/');

  const handleClickListItemButton = (event: MouseEvent<HTMLDivElement>) =>
    navigate(event.currentTarget.dataset.path || '/');

  const handleClickDialog = () => setOpenDialog((prevState) => !prevState);

  return (
    <>
      <Box component="aside" minWidth={300}>
        <Box
          display="flex"
          alignItems="center"
          p={2.5}
          onClick={handleClickLogo}
          sx={{
            cursor: 'pointer'
          }}
        >
          <Typography fontWeight={500}>로고 영역 (클릭 시 메인 이동)</Typography>
        </Box>
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          subheader={<ListSubheader component="div">리스트 서브 헤더명</ListSubheader>}
        >
          {hasSession && (
            <ListItemButton data-path="/dashboard" onClick={handleClickListItemButton}>
              <ListItemText
                primary="대시보드"
                primaryTypographyProps={{
                  fontWeight: 500
                }}
              />
            </ListItemButton>
          )}
          <ListItemButton onClick={handleClickDialog}>
            <ListItemText
              primary="디자인모드"
              primaryTypographyProps={{
                fontWeight: 500
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleClickDialog}>
            <ListItemText
              primary="사용자 관리"
              primaryTypographyProps={{
                fontWeight: 500
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemText
              primary="쇼핑"
              primaryTypographyProps={{
                fontWeight: 500
              }}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={handleClickDialog} sx={{ pl: 4 }}>
                <ListItemText
                  primary="상품관리"
                  primaryTypographyProps={{
                    fontWeight: 500
                  }}
                />
              </ListItemButton>
              <ListItemButton onClick={handleClickDialog} sx={{ pl: 4 }}>
                <ListItemText
                  primary="주문관리"
                  primaryTypographyProps={{
                    fontWeight: 500
                  }}
                />
              </ListItemButton>
              <ListItemButton onClick={handleClickDialog} sx={{ pl: 4 }}>
                <ListItemText
                  primary="취소관리"
                  primaryTypographyProps={{
                    fontWeight: 500
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <Dialog open={openDialog} onClose={handleClickDialog}>
        <Box p={4}>
          <Typography variant="h5">준비 중인 기능이에요!</Typography>
        </Box>
      </Dialog>
    </>
  );
}

export default LeftSideMenuList;
