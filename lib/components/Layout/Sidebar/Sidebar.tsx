import { Box, Typography } from '@mui/material';
import { MenuSidebar } from '../../../types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ menu, sidebarWidth, headerHeight }: { menu: MenuSidebar; sidebarWidth: string; headerHeight: string }) {
    const route = window.location;
    return (
        <Box
            sx={(theme) => ({
                [theme.breakpoints.down('md')]: {
                    '#sidebar': {
                        transform: 'translateX(-100%)',
                        '& > #bgsidebar': {
                            opacity: 0,
                            transition: 'opacity 0.3s',
                        },
                        '& > #mainsidebar': {
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.3s',
                        },
                    },
                    '#control-sidebar': {
                        '&:checked': {
                            '& + #sidebar': {
                                transform: 'translateX(0)',
                                '& > #bgsidebar': {
                                    opacity: 0.8,
                                },
                                '& > #mainsidebar': {
                                    transform: 'translateX(0)',
                                },
                            },
                        },
                    },
                },
            })}
        >
            <input id="control-sidebar" type="checkbox" style={{ display: 'none' }} />
            <Box id="sidebar" sx={{ position: 'fixed', height: '100svh', width: '100%', top: 0, left: 0, maxWidth: { xs: '100%', md: sidebarWidth }, zIndex: 1000 }}>
                <Box
                    id="bgsidebar"
                    component={'label'}
                    htmlFor="control-sidebar"
                    sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#1e3732a8', opacity: 0.8, zIndex: 0 }}
                ></Box>
                <Box
                    id="mainsidebar"
                    sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'background.secondary', maxWidth: sidebarWidth, zIndex: 1, overflowY: 'auto' }}
                >
                    <Box sx={{ height: headerHeight, display: 'flex', pl: 3, placeItems: 'center' }}>
                        <img src={'/images/logo-sidebar'} alt="logo auxo" style={{ width: '90px', height: 'auto' }} />
                    </Box>
                    <Box mt={1} px={1}>
                        {menu.map((item, index) => {
                            return <MenuItem menu={menu} index={index} pathname={route.pathname} key={'menu' + item.title + index} />;
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

function MenuItem({ index, pathname, menu }: { menu: MenuSidebar; index: number; pathname: string }) {
    // console.log(route);
    const menuItem = menu[index];
    const IconItem = menuItem.icon;
    const activeItem = pathname.indexOf(menuItem.url) == 0;
    return (
        // <Box sx={{ background: activeItem ? '#043E35' : '' }}>
        <Box mb={1}>
            <Link to={menuItem.url} style={{ textDecoration: 'none', color: 'unset' }}>
                <Box
                    sx={{
                        borderRadius: '12px',
                        display: 'flex',
                        placeItems: 'center',
                        cursor: 'pointer',
                        background: activeItem ? '#CFE9E4' : '',
                        '&:hover': { background: activeItem ? '' : '#dbedea' },
                    }}
                >
                    <Box sx={{ width: '50px', height: '46px', display: 'flex', justifyContent: 'center', placeItems: 'center' }}>
                        <IconItem sx={{ fontSize: '24px', color: activeItem ? 'primary.main' : 'primary.light' }} />
                    </Box>
                    <Box>
                        <Typography variant="body2" fontWeight={600} sx={{ color: activeItem ? 'primary.main' : 'primary.light' }}>
                            {menuItem.title}
                        </Typography>
                    </Box>
                </Box>
            </Link>

            {menuItem.children.map((item, j) => {
                return <SubMenuItem menu={menu} key={j + item.title + index} indexParent={index} indexSubmenu={j} pathname={pathname} />;
            })}
        </Box>
    );
}

function SubMenuItem({ indexParent, indexSubmenu, pathname, menu }: { menu: MenuSidebar; indexParent: number; indexSubmenu: number; pathname: string }) {
    const subMenu = menu[indexParent].children[indexSubmenu];
    const activeItem = pathname.indexOf(subMenu.url) == 0;

    return (
        <Box>
            <Link to={subMenu.url} style={{ textDecoration: 'none', color: 'unset' }}>
                <Box sx={{ display: 'flex', placeItems: 'center', cursor: 'pointer', '&:hover': { '& .title-submenu': { color: activeItem ? '' : 'secondary.main' } } }}>
                    <Box sx={{ width: '50px', height: '46px', display: 'flex', justifyContent: 'center', placeItems: 'center' }}></Box>
                    <Box>
                        <Typography className="title-submenu" variant="body2" fontWeight={600} sx={{ color: activeItem ? 'secondary.main' : 'primary.light', transition: 'color 0.3s' }}>
                            {subMenu.title}
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
}
