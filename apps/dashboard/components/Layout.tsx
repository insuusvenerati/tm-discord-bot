import { createStyles } from "@mantine/core";
import { HeaderResponsive } from "./Header";
import { NavbarSimpleColored } from "./Navbar";

const useStyles = createStyles(() => ({
  main: {
    width: 1060,
    margin: "auto",
  },
}));

const Layout = ({ children }) => {
  const { classes } = useStyles();
  return (
    <>
      <HeaderResponsive links={[{ label: "Home", link: "/" }]} />
      <NavbarSimpleColored />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
