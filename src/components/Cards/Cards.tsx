import { Image } from "antd";

interface SkillCardProps {
  name: string;
}

export const Cards = () => {
  return (
    <div className="bg-[#7AB2B2] p-4 flex flex-col gap-5 rounded-lg w-[370px] h-[173px]">
      <div className="flex gap-3 items-center">
        <Image src="/vector/website.svg" preview={false} alt="" />
        <h3>FrontEnd Developer</h3>
      </div>
      <h4>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi earum
        quisquam adipisci nihil ipsum?
      </h4>
    </div>
  );
};

export const SkillCard = ({ name }: SkillCardProps) => {
  return (
    <div className="w-[120px] h-[142px] flex flex-col justify-center items-center gap-3 p-2">
      <div className="w-[90px] h-[100px] overflow-hidden flex justify-center items-center">
        <Image
          preview={false}
          src={`/skills/${name.toLowerCase()}.svg`}
          className="max-w-[60px] max-h-[60px]"
          alt={name}
        />
      </div>
      <h3>{name}</h3>
    </div>
  );
};
