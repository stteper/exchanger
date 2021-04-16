export interface ISection {
  className: string,
  title?: string,
  content?:JSX.Element|Array<JSX.Element>|null
}

const Section : React.FC<ISection> = ({ title, content, className }) => {
  return (
    <section className={`page-sect page-sect--${className} ${className}`}>
      <header className="page-sect__header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          {content}
        </div>
      </div>
    </section>
  );
};
export {Section};