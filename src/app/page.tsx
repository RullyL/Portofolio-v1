import Container from "@/components/container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
  icons:'/vector/about.svg'
};

export default function Home() {
  return (
    <Container className="px-9 py-7">
    <div></div>
    </Container>
  );
}
