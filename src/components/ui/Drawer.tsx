"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { CiMenuFries } from "react-icons/ci";

export default function DrawerLocal() {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ display: "flex" }}>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        <CiMenuFries />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  router.push("/");
                }}
              >
                <p className="text-lg font-semibold p-[0.07rem]">Inicio</p>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton
                onClick={() => {
                  router.push("/pokedex");
                }}
              >
                <p className="text-lg font-semibold p-[0.07rem]">Pokedex</p>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
