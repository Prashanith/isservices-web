import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm, hasLength, matches } from "@mantine/form";
import React, { useState } from "react";
import { createRequest } from "../../../services/userServiceRequest";
import { showNotification, updateNotification } from "@mantine/notifications";
import { motion } from "framer-motion";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      mobile: "",
    },

    validate: {
      name: hasLength({ min: 1 }, "Invalid Name"),
      mobile: matches(/^([0|\+[0-9]{1,5})?([0-9]{10})$/, "Invalid Mobile"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  async function submitForm(values) {
    setIsLoading(true);

    showNotification({
      id: "req",
      title: "Alert",
      autoClose: false,
      message: "Creating Request in process",
      color: "red",
      className: "my-notification-class",
      style: { backgroundColor: "#1A120B" },
      sx: { backgroundColor: "#1A120B" },
      loading: isLoading,
    });

    try {
      console.log(values);
      var res = await createRequest(values.name, values.email, values.mobile);
      const isSuccessful = res.status == 200;
      console.log(res);
      updateNotification({
        id: "req",
        title: isSuccessful ? "Success" : "Failure",
        message: isSuccessful
          ? "Request Submitted Successfully. Our team will contact you in some time"
          : "Unknown Error Occurred, Please Try Again Later",
      });
    } catch (error) {
      console.log(error);
      updateNotification({
        id: "req",
        title: "Failure",
        message: "Unknown Error Occurred, Please Try Again Later",
      });
    }
    form.reset();
  }

  return (
    <div
      id="contactForm"
      className="bg-gradient-to-r to-quarternary from-tertiary min-h-screen flex flex-row justify-center items-center"
    >
      <div
        style={{ backgroundImage: "url('assets/contactbg.svg')" }}
        className="hidden lg:block bg-no-repeat w-1/2 bg-center bg-contain py-auto h-screen"
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="bg-primary rounded-3xl p-8 md:p-12 pt-16 m-6 sm:m-12"
      >
        <Box sx={{ maxWidth: 380, background: "" }} className="rounded-lg ">
          <div className="text-2xl">
            Have a project? We would love to help.
            <br /> We strive to get the best
          </div>
          <br />
          <form
            onSubmit={form.onSubmit((values) =>
              values == null ? {} : submitForm(values)
            )}
          >
            <TextInput
              label="Name"
              placeholder="I am your client"
              {...form.getInputProps("name")}
            />
            <br />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <br />

            <TextInput
              label="Mobile"
              placeholder="9999999999"
              {...form.getInputProps("mobile")}
            />
            <br />

            <Group position="right" mt="md">
              <Button
                type="submit"
                variant="filled"
                radius="xl"
                size="md"
                className=" block"
                color={"yellow"}
              >
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </motion.div>
    </div>
  );
}

export default ContactForm;
