import { Button, Link } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import styled from "styled-components";

interface SignLayoutProps {
  title: string;
}

const SignLayout: React.FC<SignLayoutProps> = ({ title, children }) => {
  const { signInGoogle } = useStore().userStore;
  const router = useRouter();

  return (
    <StyledContainer>
      <Image
        src="/images/brand.png"
        height={70}
        width={260}
        objectFit="contain"
        alt="brand"
      />
      {children}
      <StyledText>
        <StyledSpan>
          {router.pathname === "/login" && "New to LinkedIn?"}{" "}
          {router.pathname === "/register" && "Already registered?"}{" "}
        </StyledSpan>
        <StyledLink
          onClick={() =>
            router.push(router.pathname === "/login" ? "register" : "login")
          }
        >
          {title}
        </StyledLink>
      </StyledText>
      <StyledButton variant="outlined" onClick={signInGoogle}>
        Sign In Google
      </StyledButton>
    </StyledContainer>
  );
};

export default SignLayout;

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6.25rem 0;
`;

const StyledText = styled.h4``;

const StyledSpan = styled.span`
  color: gray;
`;

const StyledLink = styled(Link)`
  &&& {
    cursor: pointer;
    text-decoration: underline;
    color: #0177b7;
  }
`;

const StyledButton = styled(Button)`
  &&& {
    width: 20rem;
    height: 3.25rem;
    margin: 1rem;
    border-radius: 0.25rem;
    font-size: large;
    text-transform: capitalize;
  }
`;
