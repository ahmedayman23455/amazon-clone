import React from "react";
import { getProviders, signIn } from "next-auth/react";

import SigninWrapper from "../../components/signin/SigninWrapper";
import Header from "../../components/Header/Header";


function SignIn({ providers }) {
  return (
    <>
      <Header/>
      <SigninWrapper>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>  
               <span>  
               <img src="/google.jpg" alt="" />
               </span>
              <span>  Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </SigninWrapper>
    </>
  );
}

export default SignIn;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};