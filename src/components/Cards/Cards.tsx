import { Image } from "antd";

interface CardProps {
  title: string;
  description?: string;
  icon?: string;
}

export const Cards = ({
  title = "FrontEnd Developer",
  description = "I create responsive and modern websites using React and Next.js.",
  icon = "/vector/website.svg",
}: CardProps) => {
  return (
    <div className="bg-[#7AB2B2] dark:bg-[#334155] text-white p-4 flex flex-col gap-5 rounded-lg w-[300px] md:w-[355px] h-[173px] shadow-md transition-all">
      <div className="flex gap-3 items-center">
        <Image src={icon} preview={false} alt={title} width={30} />
        <h3 className="text-white">{title}</h3>
      </div>
      <h4 className="text-sm">{description}</h4>
    </div>
  );
};

interface SkillCardProps {
  name: string;
}

export const SkillCard = ({ name }: SkillCardProps) => {
  return (
    <div className="w-[120px] h-[142px] flex flex-col justify-center items-center gap-3 p-2 rounded-lg bg-[#7AB2B2] dark:bg-[#334155] shadow">
      <div className="w-[90px] h-[100px] overflow-hidden flex justify-center items-center">
        <Image
          preview={false}
          src={`/skills/${name.toLowerCase()}.svg`}
          className="max-w-[60px] max-h-[60px]"
          alt={name}
        />
      </div>
      <h3 className="text-white text-center text-sm">{name}</h3>
    </div>
  );
};
