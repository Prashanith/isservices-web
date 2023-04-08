import { MantineProvider } from "@mantine/core";
import LandingPage from "./features/landingPage/landingPage";
import React from "react";
import { NotificationsProvider } from "@mantine/notifications";

function App() {
  return (
    <MantineProvider
      theme={{
        colors: {
          brand: ["#1A120B", "#3C2A21", "#D5CEA3"],
          btnColor: ["#1A120B"],
        },
        primaryColor: "brand",
        colorScheme: "dark",
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
      <NotificationsProvider />
      <div className="w-full p-0 m-0">
        <LandingPage />
      </div>
    </MantineProvider>
  );
}

export default App;
