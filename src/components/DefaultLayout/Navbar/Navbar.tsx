import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import {
  Button,
  ButtonContainer,
  FixedHeader,
  FloatTitle,
  HeadBanner,
  HeaderContainer,
  NavbarContainer
} from "./Navbar.styled"

export default function Navbar() {
  const router = useRouter()
  const { id } = router.query
  
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeadBanner>
        {scrollPosition <= 300 &&
          <FloatTitle>
            Gary Ho
          </FloatTitle>
        }
        <h1>{`>  HI, I'M GARY HO`}</h1>
      </HeadBanner>
      <NavbarContainer visible={scrollPosition > 300}>
        {scrollPosition > 300 &&
          <FixedHeader className="fixed-header">
            Gary Ho
          </FixedHeader>
        }
        <ButtonContainer>
          <Button onClick={() => router.push('/blog')}> Blog</Button>
          <Button onClick={() => router.push('/project')}> Project</Button>
          <Button onClick={() => router.push('/about')}> About</Button>
        </ButtonContainer>
      </NavbarContainer>
    </HeaderContainer>
  )
}