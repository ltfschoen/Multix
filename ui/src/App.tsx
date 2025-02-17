import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About, Creation, Home } from "./pages"
import Header from "./components/Header"
import Container from "@mui/material/Container"
import { UserSpace } from "./components/UserSpace"
import { AccountContextProvider } from "./contexts/AccountsContext"
import { ApiContextProvider } from "./contexts/ApiContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MultiProxyContextProvider } from "./contexts/MultiProxyContext"
import { ToastContextProvider } from "./contexts/ToastContext"
import { theme } from "./theme"
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AccountNamesContextProvider } from "./contexts/AccountNamesContext"
import { NetworkContextProvider } from "./contexts/NetworkContext"


const App = () => {
  const queryClient = new QueryClient()

  return (
    <MuiThemeProvider theme={theme}>
      <ToastContextProvider>
        <BrowserRouter>
          <NetworkContextProvider>
            <QueryClientProvider client={queryClient}>
              <ApiContextProvider>
                <AccountContextProvider>
                  <AccountNamesContextProvider>
                    <MultiProxyContextProvider>
                      <Header />
                      <Container
                        fixed
                        sx={{ paddingTop: "6rem" }}>
                        <UserSpace>
                          <Routes>
                            <Route
                              path="/"
                              element={<Home />}
                            />
                            <Route
                              path="/create"
                              element={<Creation />}
                            />
                            <Route
                              path="/about"
                              element={<About />}
                            />
                          </Routes>
                        </UserSpace>
                      </Container>
                    </MultiProxyContextProvider>
                  </AccountNamesContextProvider>
                </AccountContextProvider>
              </ApiContextProvider>
            </QueryClientProvider>
          </NetworkContextProvider>
        </BrowserRouter>
      </ToastContextProvider>
    </MuiThemeProvider>
  )
}

export default App;
