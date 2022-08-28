import {
    AppShell,
    Group,
    Header,
    Text,
    createStyles,
    Container,
} from "@mantine/core";
import React from "react";
import { Outlet } from "react-router";

const HEADER_HEIGHT = 65;

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
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

    linkLabel: {
        marginRight: 5,
    },
    curosrPointer: {
        cursor: "pointer",
    },
}));


function LandingLayout() {
    const { classes } = useStyles();
    return (
        <AppShell
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            header={
                <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
                    <Container className={classes.inner} fluid>
                        <Group>
                            <Text
                                className={classes.curosrPointer}
                                weight="bold"
                                size="lg"
                            >
                                Locsnap
                            </Text>
                        </Group>

                    </Container>
                </Header>
            }
        >
            <Outlet />
        </AppShell>
    );
}

export default LandingLayout;