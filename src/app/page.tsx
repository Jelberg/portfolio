'use client'

import { Button } from "@nextui-org/react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./assets";
import {Image} from "@nextui-org/image";


export default function Home() {

  return (
    <div>
      <main >
        <section className="flex justify-between">
          <div className="flex flex-col gap-4 p-8 lg:p-48">
            <div className="inline-block">
              <h1 className="tracking-tight inline text-[2.5rem] lg:text-5xl">{`Hello! I'm`}</h1>
              <h1  className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b"> Jessica</h1>
            </div>
            <div className="inline-block">
              <p className="inline">{`I'm a `}</p>
              <p className="inline">{`software engineer`}</p>
              <p className="inline">{`, I love to build things and I'm always looking for new challenges.`}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Button startContent={<MailIcon />} variant="bordered">Contact me</Button>
              <Button startContent={<LinkedinIcon />}  variant="bordered">Linkedin</Button>
              <Button startContent={<GithubIcon />}  variant="bordered">Github</Button>
            </div>
          </div>
          <Image className="bg-image justify-end" src={"/img/ligth-blue.png"} width={`80%`} height={`80%`} alt="light-blue" />
        </section>
       </main>
    </div>
  );
}
