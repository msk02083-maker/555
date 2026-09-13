import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../lib/firebase';

export default function AdminLogin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/admin/dashboard');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
      <div className="bg-white p-10 rounded-sm shadow-sm border border-[#E8DFD8] text-center max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-[#3E2723] mb-2">관리자 로그인</h1>
        <p className="text-[#5C4033]/80 mb-8">오직 매장 관리자만 접근할 수 있습니다.</p>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <button
          onClick={handleLogin}
          className="w-full bg-[#8C6D56] text-white py-4 rounded-md font-bold text-lg hover:bg-[#755945] transition-colors"
        >
          Google 계정으로 로그인
        </button>
      </div>
    </div>
  );
}
