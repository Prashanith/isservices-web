import { Alert } from "@mantine/core";
import React from "react";

function CustomAlert({ isSuccess, title, message }) {
  return (
    // <Alert
    //   title={title}
    //   withCloseButton
    //   color="dark"
    // >
    //   {message}
    // </Alert>
    <Alert title="Bummer!" color="dark">
      Something terrible happened! You made a mistake and there is no going
      back, your data was lost forever!
    </Alert>
  );
}

export default CustomAlert;
