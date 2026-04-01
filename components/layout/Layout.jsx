import DrawerAppBar from '../Header/DrawerAppBar';
import { Footer } from '../Footer';
import { WhatsAppButton } from '../buttons/WhatsAppButton';
import { GoingUpButton } from '../buttons/GoingUpButton';

const Layout = ({ children }) => {
  return (
    <>
      <DrawerAppBar />
      <WhatsAppButton />
      <GoingUpButton />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
