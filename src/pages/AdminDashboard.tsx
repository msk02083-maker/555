import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, collection, query, orderBy, onSnapshot, signOut, doc, updateDoc } from '../lib/firebase';
import { LogOut, Clock, ChefHat, CheckCircle2 } from 'lucide-react';

interface ReservationData {
  id: string;
  name: string;
  phone: string;
  menu: string;
  quantity: number;
  date: string;
  time: string;
  requests: string;
  status: 'pending' | 'preparing' | 'completed';
  createdAt: any;
}

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<ReservationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/admin');
      }
    });

    const q = query(collection(db, 'reservations'), orderBy('createdAt', 'desc'));
    const unsubscribeDB = onSnapshot(q, (snapshot) => {
      const data: ReservationData[] = [];
      snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() } as ReservationData);
      });
      setReservations(data);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setError(`권한이 없거나 데이터를 불러올 수 없습니다. 관리자 계정인지 확인해주세요. (현재 계정 UID: ${auth.currentUser?.uid})`);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeDB();
    };
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth);
  };

  const updateStatus = async (id: string, newStatus: 'pending' | 'preparing' | 'completed') => {
    try {
      await updateDoc(doc(db, 'reservations', id), {
        status: newStatus
      });
    } catch (err: any) {
      console.error(err);
      alert('상태 업데이트 실패: ' + err.message);
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending': return <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold"><Clock className="w-4 h-4"/> 신규 예약</span>;
      case 'preparing': return <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold"><ChefHat className="w-4 h-4"/> 준비 중</span>;
      case 'completed': return <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold"><CheckCircle2 className="w-4 h-4"/> 수령 완료</span>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] p-6 md:p-12 font-['Noto_Sans_KR']">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-[#3E2723]">관리자 대시보드</h1>
            <p className="text-[#5C4033] mt-2">오늘도빵 예약 내역 관리</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8DFD8] rounded-md hover:bg-gray-50 text-[#3E2723] transition-colors font-bold"
          >
            <LogOut className="w-5 h-5" /> 로그아웃
          </button>
        </header>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-8 border border-red-200">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-center text-lg text-[#5C4033] py-20">데이터를 불러오는 중입니다...</p>
        ) : (
          <div className="bg-white rounded-md shadow-sm border border-[#E8DFD8] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F0E6DD] text-[#3E2723]">
                    <th className="p-4 font-bold border-b border-[#E8DFD8]">픽업 일시</th>
                    <th className="p-4 font-bold border-b border-[#E8DFD8]">예약자 (연락처)</th>
                    <th className="p-4 font-bold border-b border-[#E8DFD8]">예약 메뉴</th>
                    <th className="p-4 font-bold border-b border-[#E8DFD8]">요청사항</th>
                    <th className="p-4 font-bold border-b border-[#E8DFD8]">현재 상태</th>
                    <th className="p-4 font-bold border-b border-[#E8DFD8]">상태 변경</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center p-12 text-[#5C4033]/70 text-lg">
                        아직 접수된 예약이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    reservations.map(res => (
                      <tr key={res.id} className="border-b border-[#E8DFD8] hover:bg-gray-50 transition-colors">
                        <td className="p-4 whitespace-nowrap">
                          <div className="font-bold text-[#3E2723]">{res.date}</div>
                          <div className="text-[#8C6D56]">{res.time}</div>
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <div className="font-bold text-[#3E2723]">{res.name}</div>
                          <div className="text-sm text-[#5C4033]">{res.phone}</div>
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <div className="font-bold text-[#3E2723]">{res.menu}</div>
                          <div className="text-sm text-[#5C4033]">{res.quantity}개</div>
                        </td>
                        <td className="p-4 max-w-[200px] truncate text-[#5C4033]" title={res.requests}>
                          {res.requests || '-'}
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          {getStatusBadge(res.status)}
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <select 
                            className="p-2 border border-[#E8DFD8] rounded-md outline-none focus:border-[#8C6D56] bg-white cursor-pointer font-medium"
                            value={res.status}
                            onChange={(e) => updateStatus(res.id, e.target.value as any)}
                          >
                            <option value="pending">신규 예약</option>
                            <option value="preparing">준비 중</option>
                            <option value="completed">수령 완료</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
