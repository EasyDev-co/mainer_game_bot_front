import "./TitlePage.css";

interface TitlePageProps {
  title: string;
  additionalStyles?: string;
}

export const TitlePage = ({ title, additionalStyles }: TitlePageProps) => {
  return (
    <div className={`title-page${additionalStyles ? additionalStyles : ""}`}>
      <h1 className="title-page__title">{title}</h1>
    </div>
  );
};
