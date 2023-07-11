import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useAppDispatch } from './redux/hooks';
import { auth } from './lib/firebase';

function App() {
  const dispatch = useAppDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email!));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
    }
  });
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
