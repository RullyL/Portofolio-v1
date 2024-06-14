import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";
import { Button, Form, Input } from "antd";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [visible, setVisible] = useState([false, false, false, false, false]);

  useEffect(() => {
    const timeouts = [
      setTimeout(
        () => setVisible((prev) => [true, false, false, false, false]),
        500
      ),
      setTimeout(
        () => setVisible((prev) => [true, true, false, false, false]),
        800
      ),
      setTimeout(
        () => setVisible((prev) => [true, true, true, false, false]),
        1200
      ),
      setTimeout(
        () => setVisible((prev) => [true, true, true, true, false]),
        1600
      ),
      setTimeout(
        () => setVisible((prev) => [true, true, true, true, true]),
        2000
      ),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const layout = {
    labelCol: { span: 24 },
  };

  return (
    <Container className="flex flex-col h-full justify-around lg:gap-y-14">
      <Title name="Contact" />
      <div
        className={`transition-opacity duration-1000 ${
          visible[1] ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-[25px] my-4 lg:my-0 lg:text-[32px]">
          Get in touch with me here
        </h2>
      </div>
      <Form
        {...layout}
        className={`w-full transition-opacity duration-1000 ${
          visible[2] ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={`flex flex-col md:flex-row gap-4 w-full`}>
          <Form.Item name="first_name" label="First Name" className="flex-grow">
            <Input placeholder="Input Your First Name Here" size="large" />
          </Form.Item>
          <Form.Item name="last_name" label="Last Name" className="flex-grow">
            <Input placeholder="Input Your Last Name Here" size="large" />
          </Form.Item>
        </div>
        <Form.Item name="email" label="Email Address">
          <Input placeholder="Input Your Email Address Here" size="large" />
        </Form.Item>
        <Form.Item name="message" label="Your Message">
          <Input.TextArea placeholder="Input Your Message Here" rows={4} />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}
