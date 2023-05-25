const Breadcrumb = () => {
  const title = document.title;

  return (
    <div className="container mx-auto flex gap-2 py-3">
      <span>
        <i className="fas fa-home"></i>
      </span>
      <span>/</span>
      <span>Dịch vụ</span>
      <span>/</span>

      <span className="font-medium">{title}</span>
    </div>
  );
};

export default Breadcrumb;
