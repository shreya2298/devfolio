import Button from "./Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[100vh] w-[50vw] top-10 left-full"
          fill="red"
        />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="red" />
      </div>
      <div className="text-center my-20 mx-auto max-w-[900px] justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-extrabold">
            Hey, I&apos;m <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">Shreya Fegade!</span>
          </h1>
        </Reveal>
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
          I&apos;m a Devops Engineer
        </h2>
        <p className="max-w-[700px] mx-auto">
        A backend engineer and DevOps enthusiast who loves building reliable systems and learning new tech every day. If you&apos;re into backend magic, cloud stuff and to automate Integrations and Deployments, or just want to chat, DM me — let&apos;s build something awesome together! 🚀

        </p>
        <a className="mt-10 mx-auto" href="#contact">
          <Button
            title="Contact me"
            icon={<Image src="/assets/send.svg" alt="Send icon" width={24} height={24} />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
