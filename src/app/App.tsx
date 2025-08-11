import { Toaster } from "react-hot-toast";

import ApolloClientProvider from "../components/partials/providers/ApolloClientProvider";
import RouterProvider from "../components/partials/providers/RouterProvider";

function App() {
  return (
    <ApolloClientProvider>
      <RouterProvider />
      <Toaster position="top-center" />
    </ApolloClientProvider>
  );
}

export default App;
