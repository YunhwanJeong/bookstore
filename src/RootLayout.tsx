import { Header } from '@/components';
import MainPage from './MainPage';
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
