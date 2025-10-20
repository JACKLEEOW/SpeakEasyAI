import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import LoginButton from  "@/components/ui/logoutbutton"
import AuthStatus from "@/components/AuthStatus";


export default function Home() {
  return (
    <div >
      <Button>Hello World</Button>
      <LoginButton></LoginButton>
        <AuthStatus />

    </div>
  );
}
