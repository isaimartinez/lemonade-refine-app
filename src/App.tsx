import {
  Refine,
  Authenticated
  , AuthBindings,
} from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  AuthPage, ErrorComponent
  , notificationProvider
  , RefineSnackbarProvider
  , ThemedLayout
} from '@refinedev/mui';

import dataProvider from "@refinedev/simple-rest";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier } from "@refinedev/react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import {
  Tienda,
  Login,
  DocumentosFinancieros,
  Prestamistas,
  Receta,
  Reputacion,
  Suministros,
  Trabajadores,
  Menu
} from 'pages'
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

import {Store, LocalGroceryStore, Checklist, Group, AccountBalance, Badge, Description, Home} from '@mui/icons-material'


const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});



function App() {



  const authProvider: AuthBindings = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...profileObj,
            avatar: profileObj.picture,
          }),
        );

        localStorage.setItem("token", `${credential}`);

        return {
          success: true,
          redirectTo: "/",
        };
      }

      return {
        success: false,
      };
    },
    logout: async () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return {};
        });
      }

      return {
        success: true,
        redirectTo: "/login",
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Token not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }

      return null;
    },
  };


  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
              notificationProvider={notificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={[
                {
                  name: "menu",
                  list: '/menu',
                  meta: {
                    canDelete: true,
                    icon: <Home />,
                    label: 'Menú'
                  },
                },
                {
                  name: "tienda",
                  list: '/tienda',
                  meta: {
                    canDelete: true,
                    icon: <Store />
                  },
                },
                {
                  name: "suministros",
                  list: '/suministros',
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                    icon: <LocalGroceryStore />
                  },
                },
                {
                  name: "receta",
                  list: '/receta',
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                    icon: <Checklist />
                  },
                },
                {
                  name: "trabajadores",
                  list: '/trabajadores',
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                    icon: <Group />
                  },
                },
                {
                  name: "prestamistas",
                  list: '/prestamistas',
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                    icon: <AccountBalance />
                  },
                },
                {
                  name: "reputacion",
                  list: '/reputacion',
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                    icon: <Badge />,
                    label: 'Reputación'
                  },
                },
                {
                  name: "documentos financieros",
                  list: '/documentos-financieros',
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                    icon: <Description />
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayout
                        Header={Header}
                      >
                        <Outlet />
                      </ThemedLayout>
                    </Authenticated>
                  }
                >
                  <Route index element={
                    <NavigateToResource resource="tienda" />
                  } />
                  <Route path="/menu">
                    <Route index element={<Menu />} />
                  </Route>
                  <Route path="/tienda">
                    <Route index element={<Tienda />} />
                  </Route>
                  <Route path="/suministros">
                    <Route index element={<Suministros />} />
                  </Route>
                  <Route path="/receta">
                    <Route index element={<Receta />} />
                  </Route>
                  <Route path="/trabajadores">
                    <Route index element={<Trabajadores />} />
                  </Route>
                  <Route path="/prestamistas">
                    <Route index element={<Prestamistas />} />
                  </Route>
                  <Route path="/reputacion">
                    <Route index element={<Reputacion />} />
                  </Route>
                  <Route path="/documentos-financieros">
                    <Route index element={<DocumentosFinancieros />} />
                  </Route>

                </Route>




                <Route
                  element={
                    <Authenticated fallback={<Outlet />}>
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route
                  element={
                    <Authenticated>
                      <ThemedLayout
                        Header={Header}
                      >
                        <Outlet />
                      </ThemedLayout>
                    </Authenticated>
                  }
                >
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
              </Routes>

            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
};

export default App;
