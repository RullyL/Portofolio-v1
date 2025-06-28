import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [visible, setVisible] = useState([false, false, false, false, false]);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setVisible([true, false, false, false, false]), 500),
      setTimeout(() => setVisible([true, true, false, false, false]), 800),
      setTimeout(() => setVisible([true, true, true, false, false]), 1200),
      setTimeout(() => setVisible([true, true, true, true, false]), 1600),
      setTimeout(() => setVisible([true, true, true, true, true]), 2000),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const layout = {
    labelCol: { span: 24 },
  };

  const onFinish = (values: any) => {
    const hide = message.loading("⏳ Sending your message...", 0);

    emailjs
      .send("service_xothpql", "template_memf5mx", values, "tQ-ECCUIxOLvZ3Uui")
      .then(() => {
        hide();
        message.success(
          "✅ Thanks for reaching out! I'll get back to you soon."
        );
      })
      .catch(() => {
        hide();
        message.error("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <Container className="flex flex-col h-full justify-around lg:gap-y-14">
      <Title name="Contact" />
      <div
        className={`transition-opacity duration-1000 ${
          visible[1] ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-[25px] text-black dark:text-white my-4 lg:my-0 lg:text-[32px]">
          Get in touch with me here
        </h2>
      </div>
      <Form
        {...layout}
        onFinish={onFinish}
        className={`w-full transition-opacity duration-1000 ${
          visible[2] ? "opacity-100" : "opacity-0"
        }`}
        layout="vertical"
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <Form.Item
            name="first_name"
            label="First Name"
            className="flex-grow"
            rules={[
              { required: true, message: "Please input your first name" },
            ]}
          >
            <Input
              placeholder="Input Your First Name Here"
              size="large"
              className="dark:bg-slate-800 dark:text-white"
            />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            className="flex-grow"
            rules={[{ required: true, message: "Please input your last name" }]}
          >
            <Input
              placeholder="Input Your First Name Here"
              size="large"
              className="dark:bg-slate-800 dark:text-white"
            />
          </Form.Item>
        </div>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: "Please input your email address" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input
            placeholder="Input Your Email Address Here"
            size="large"
            className="dark:bg-slate-800 dark:text-white"
          />
        </Form.Item>
        <Form.Item
          name="message"
          label="Your Message"
          rules={[{ required: true, message: "Please input your message" }]}
        >
          <Input.TextArea
            placeholder="Input Your Message Here"
            rows={4}
            className="dark:bg-slate-800 dark:text-white"
          />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}
