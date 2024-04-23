import { store } from '@/app/store';
import { Provider } from 'react-redux';
import { RootLayout } from './layout';

function App() {
  return (
    <Provider store={store}>
      <RootLayout></RootLayout>
    </Provider>
  );
}

export default App;
