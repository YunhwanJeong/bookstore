import { store } from '@/app/store';
import { Provider } from 'react-redux';
import { App } from './app';

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Entry;
