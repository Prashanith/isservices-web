import { createStyles, Header, Container } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import React from "react";
import styleConfig from "../../config/stylesConfig/stylesConfig";
import Logo from "../logo/logo";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    width: "calc(100vw)",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    margin: 0,
    [theme.fn.smallerThan("sm")]: {},
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function Navbar() {
  // const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);
  const { classes } = useStyles();

  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={cx(classes.link, {
  //       [classes.linkActive]: active === link.link,
  //     })}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       setActive(link.link);
  //     }}
  //   >
  //     {link.label}
  //   </a>
  // ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <Header
        height={styleConfig.NAV_BAR_HEIGHT}
        className={`${classes.header} bg-white`}
        m={0}
        py={0}
        px={10}
        withBorder={true}
      >
        <Container className={classes.inner} m={0} p={0} size="100vw">
          <Logo />
          {/* <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={10} noWrap>
          {items}
        </Group>         */}
        </Container>
      </Header>
    </motion.div>
  );
}
