import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import { motion } from "framer-motion";
import React from "react";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: "#1A120B",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      rowGap: "20px",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

// const links = [
//   { link: "string", label: "Home" },
//   { link: "string", label: "Services" },
//   { link: "string", label: "Contact" },
//   { link: "string", label: "About" },
// ];

export function Footer() {
  const { classes } = useStyles();

  return (
    <motion.footer className={`${classes.footer}`}>
      <Container className={`${classes.inner}`}>
        <div className={classes.logo}>
          <div className="flex flex-row items-center ">
            <img src={`assets/logo.png`} className="h-12 rounded-full" />
            <div className="pl-2">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="text-sm"
              >
                iSingoji Services
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="text-xs font-extralight text-gray-400"
              >
                Our Services, Your Project
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-sm no-underline hover:underline"
            href="tel:+919866690193"
          >
            9866690193
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-sm no-underline hover:underline"
            href="mailto:is.singojisaikiran@gmail.com"
          >
            is.singojisaikiran@gmail.com
          </motion.a>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm text-center">
          © {new Date().getFullYear()} ISingoji Services. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </motion.footer>
  );
}
