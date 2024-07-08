'use client'

import { Button } from "@nextui-org/react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./assets";
import {Image} from "@nextui-org/image";
import data_experience from "./data/mock-experience";


export default function Home() {

  return (
    <div>
      <main className="flex">
        <section className="">
          <div className="flex flex-col gap-4 p-8 lg:p-48 ">
            <div className="inline-block justify-center">
              <h1 className="tracking-tight font-bold inline text-[2.5rem] lg:text-5xl">{`Hello! I'm`}</h1>
              <h1  className="tracking-tight inline font-bold from-[#903dae] to-[#07bbfd] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b"> Jessica</h1>
            </div>
            <div className="inline-block">
              <p className="inline">{`I'm a `}</p>
              <p className="inline">{`software engineer`}</p>
              <p className="inline">{`, I love to build things and I'm always looking for new challenges.`}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <Button startContent={<MailIcon />} variant="bordered">Contact me</Button>
              <Button startContent={<LinkedinIcon />}  variant="bordered">Linkedin</Button>
              <Button startContent={<GithubIcon />}  variant="bordered">Github</Button>
            </div>
          </div>
          <div className="absolute w-full h-full bg-image ">
            <Image className="fixed top-0 right-0 bg-image float-right" src={"/img/ligth-blue.png"} width={`15%`} height={`15%`} alt="light-blue" />
          </div>  
        </section>
       </main>
       <section className="flex flex-col justify-center items-center mr-10 ml-10 lg:mr-60 lg:ml-60">
        <div>
          <h2 className="text-shadow font-bold text-[1.5rem] mb-10">Experiencia Laboral</h2>
        </div>

        <div className="flex flex-col gap-10 md:pr-24 md:pl-24 ">
          <table width="100%" >
              <tr>
              <th></th>
              <th></th>
              </tr>
              {data_experience.map((experience: any, index:number) => (<tr key={index}>
                <td  valign="middle" align="left" className="pb-8">
                <div className="pl-4 border-l-2 ">
                  <p className="font-bold text-[1.1rem]">{experience.position}</p>
                  <p className="font-bold text-primary text-[1.3rem]">{experience.company}</p>
                  <p className="font-bold text-[0.7rem]">{experience.date}</p>
                </div>
              </td>
              <td  valign="middle" align="left" >
                <div className="mt-5 ml-2 md:mt-0">
                  <p>{experience.description}</p>
                </div>  
                </td>
              </tr>))}
            </table>
          </div>
       </section>
    </div>
  );
}
