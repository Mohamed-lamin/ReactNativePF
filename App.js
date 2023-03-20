
import { AuthProvider } from './context/AuthContext';

import AppNav from './navigation/AppNav';



export default function App() {
 
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
