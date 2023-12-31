import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Body from "@/src/components/Body/Body";
import BodyProject from "@/src/components/BodyProject/BodyProject";

export default function Home() {
  return (
    <div>
       
      <Header />
      <BodyProject />
      <Body />
      <Footer />
    </div>
  );
}
