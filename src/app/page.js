import HeroNews from "@/components/home/HeroNews";
import LatestNews from "@/components/home/LatestNews";
import HomeLayout from "@/components/layout/after-login/HomeLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeLayout>
        <div className="mx-10 bg-white">
        <HeroNews />
        <LatestNews />
        </div>
      </HomeLayout>
    </div>
  );
}
