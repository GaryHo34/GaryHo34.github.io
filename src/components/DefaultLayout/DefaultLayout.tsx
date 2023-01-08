import { Container } from "./DefaultLayout.styled";
import { DefaultLayoutProps } from "./DefaultLayout.types";
import Navbar from "./Navbar";

export default function DefaultLayout({
  children,
}: DefaultLayoutProps) {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
    </>
  )
}