import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box height="100vh">
      <Box display="flex" height="calc(100% - 80px)">
        <Sidebar />
        <Box
          component="section"
          display="flex"
          width="calc(100% - 60px)"
          borderLeft="1px solid grey"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
