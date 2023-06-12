import { QueryClient, QueryClientProvider } from "react-query";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Error from "./components/error/error";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchIntervalInBackground: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Breadcrumb />
      <MainPage />
      <Error />
    </QueryClientProvider>
  );
}

export default App;
