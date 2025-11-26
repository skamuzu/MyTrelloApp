import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CardWrapper from "./_components/card-wrapper";
import Footer from "./_components/footer";
import { Card } from "@/components/ui/card";

const Page = () => {

  return (
    <div className="flex flex-col items-center max-w-8xl  mx-auto pt-5 space-y-16">
      <div className="text-center flex flex-col  space-y-4 items-center">
        <h1 className="text-6xl font-bold max-w-4xl">
          Organize Your Projects, Master Your Worklow.
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl ">
          The ultimate visual tool for teamwork, allowing you to manage
          projects, track progress, and boost productivity.
        </p>
        <Button asChild size={"lg"} className="w-60 text-lg p-6">
          <Link href="/auth/sign-up">Get Started - It's Free</Link>
        </Button>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Productivity Image"
        width={1200}
        height={600}
        className=" rounded-lg shadow-lg h-150 w-full max-w-7xl"
      />
      <div className="flex text-center flex-col items-center mt-16  space-y-4">
        <h2 className="text-5xl font-bold">All the features you need</h2>
        <p className="text-muted-foreground max-w-2xl">
          TaskFlow provides a comprehensive suite of tools to help your team
          stay organized and productive.
        </p>
      </div>
      <div className="flex max-w-8xl w-full justify-center">
        <CardWrapper />
      </div>
      <Card className=" w-full max-w-7xl rounded-xl flex flex-col py-10 items-center justify-center mt-16 mb-20 h-80">
        <h2 className="text-4xl font-bold mb-8">Ready to Boost Your Team's Productivity?</h2>
        <Button asChild size={"lg"} className="w-60 text-lg p-6 mb-10">
          <Link href="/auth/sign-up">Sign Up For Free</Link>
        </Button>
      </Card>
        <Footer />
    </div>
  );
};

export default Page;
