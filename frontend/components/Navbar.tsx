"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Bosh sahifa", href: "/" },
    { label: "Konferensiyalar", href: "/conferences" },
    { label: "Biz haqimizda", href: "/about" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          bgcolor: "white",
          color: "black",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT: LOGO */}
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" fontWeight="bold">
              Ilmiy Konferensiyalar
            </Typography>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit">{item.label}</Button>
              </Link>
            ))}

            {/* ADMIN BUTTON */}
            <Button
              variant="contained"
              color="primary"
              href="/admin"
              target="_blank"
            >
              Admin Panel
            </Button>
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER MENU */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation">
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ p: 2, pb: 1, borderBottom: "1px solid #eee" }}
          >
            Menu
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton component="a" href="/admin" target="_blank">
                <ListItemText primary="Admin Panel" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
