import Image from "next/image";
import { Inter } from "next/font/google";
import { useAuth } from "@/provider/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <p>Welcome, {currentUser.displayName}!</p>
      ) : (
        <p>Please sign in to continue.</p>
      )}
    </div>
  );
}
