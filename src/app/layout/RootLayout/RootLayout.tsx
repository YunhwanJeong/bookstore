import MainPage from '../../../MainPage';
import { Header } from '../Header';
import './RootLayout.css';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <MainPage />
      </main>
    </>
  );
}

export default RootLayout;
