import Image from "next/image";
import Navbar from "./components/navigationbar";
import Footer from "./components/footer";
import AppointmentForm from "@/pages/appointment";

export default function Home() {
  return (
    <>
      <Navbar />
      <AppointmentForm />
      <div className="h-96" />
      <Footer />
    </>
  );
}
