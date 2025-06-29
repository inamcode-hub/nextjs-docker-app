interface PageTemplateProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PageTemplate = ({ title, description, children }: PageTemplateProps) => {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;