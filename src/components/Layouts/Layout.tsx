import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { MotionDiv } from "./MotionDiv";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full blob z-[-1]" />
      <div className="relative z-0">
        <Nav />
        <main className="px-4 pt-16 mb-12">
          <MotionDiv>{children}</MotionDiv>
        </main>
        <Footer />
      </div>
    </div>
  );
};
