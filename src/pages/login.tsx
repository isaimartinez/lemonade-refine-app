import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import { Box, Container, Typography } from "@mui/material";
import { ThemedTitle } from "@refinedev/mui";
import { CredentialResponse } from "../interfaces/google";

import { logo, bg } from "assets";

// Todo: Update your Google Client ID here
const GOOGLE_CLIENT_ID = "661311144280-rk0bt4p57cpuq7vh80frgcetlqnui61r.apps.googleusercontent.com";

export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>();

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: GOOGLE_CLIENT_ID,
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "filled_blue",
                    size: "medium",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
        }, []);

        return <div ref={divRef} />;
    };


    
        return (

            <div className="flex flex-col items-center justify-center w-full h-screen gap-5"
                style={{backgroundImage: `url(${bg})`,  backgroundRepeat: 'repeat'}}
            >
                <img src={logo} alt="Logo" className="w-52 h-52"/>

                <GoogleButton />

            </div>
          /*   <Container
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Box
                display="flex"
                gap="36px"
                justifyContent="center"
                flexDirection="column"
            >
                <img src={logo} alt="Logo"/>

                <GoogleButton />
            </Box>
            </Container> */
        );



};
