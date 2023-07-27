type PortfolioProps = {
  enabled: boolean;
};

const Portfolio = (props: PortfolioProps) => {
  return (
    <>
      {props.enabled && (
        <div className="flex pb-4">
          <p>coming soon...</p>
          <p>
            actualmente hay varios repos en modo privado, pero en breve los
            publicaré.
          </p>
        </div>
      )}
    </>
  );
};

export default Portfolio;
