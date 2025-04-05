import Button from "./Button";
import Reveal from "./ui/Reveal";
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="w-full py-20 sm:py-40 justify-center flex items-center z-20" id="contact">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2>
            Contact <span className=" bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              me.</span>
          </h2>
        </Reveal>
        <p className="max-w-[700px] mt-10">
          {"Let's collaborate on your next project!"}
        </p>
        <p className="max-w-[700px] mt-4">
          Check out my <a
            className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            target="_blank"
            href="https://github.com/shreya2298"
          >
            GitHub
          </a> repository
        </p>
        <a className="mt-10" href="mailto:hello@theplumup.com">
          <Button
            title="Let's connect"
            icon={<Image src="/assets/send.svg" alt="Send icon" width={24} height={24} />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
