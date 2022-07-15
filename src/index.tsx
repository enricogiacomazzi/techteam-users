import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/public/Login';
import { UsersList } from './pages/private/users/UserList/UserList';
import { InvoicesList } from './pages/private/invoices/InvoicesList';
import { ProtectedRoute } from './components/ProtectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UsersDetail } from './pages/private/users/UserDetail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="/" element={
            <ProtectedRoute>
              <App/>
            </ProtectedRoute>
          }>
            <Route path="users" element={<UsersList/>}/>
            <Route path="users/:id" element={<UsersDetail/>}/>
            <Route path="invoices" element={<InvoicesList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
