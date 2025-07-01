import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  allowedRoles?: string[];
}

const RequireAuth = ({ children, allowedRoles }: Props) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user  = JSON.parse(localStorage.getItem('user') || '{}');
  
  if (!token) {
    const loginPath = location.pathname.startsWith('/admin') ? '/admin/login' : '/login';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  if (allowedRoles && (!user || !allowedRoles.includes(user.role))) {
    return <div className="text-red-500 p-10">Bạn không có quyền truy cập.</div>;
  }

  return children;
};

export default RequireAuth;
