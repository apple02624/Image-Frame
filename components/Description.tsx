interface DescriptionProps {
  title: string;
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="pt-10 sm:px-10 px-2 text-4xl font-bold text-gray-800">{title}</div>
      <div className="sm:px-20 px-4 text-2xl font-mono text-gray-800">{description}</div>
    </div>
  );
};

export default Description;
