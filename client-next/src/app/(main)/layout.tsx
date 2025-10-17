import { AppContainer } from "@/styles/GlobalStyles";
import HeaderServer from "@/components/Header/HeaderServer";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppContainer>
      <HeaderServer />
      {children}
    </AppContainer>
  );
}
