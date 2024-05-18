import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Meta = (props) => {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{props.title}</title>
        </Helmet>
      </div>
    </>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;
