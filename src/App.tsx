import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {store} from "./store/Redux/store.ts"
const queryClient = new QueryClient();

declare global {
    interface Window {
        __TANSTACK_QUERY_CLIENT__?: QueryClient;
    }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Router>
                    <AppRoutes />
                </Router>
            </Provider>
        </QueryClientProvider>
    );
};

export default App;
