import { PropTypes } from "prop-types";

const Container = (props) => {
  return (
    <section className={props.class}>
      <div>{props.children}</div>
    </section>
  );
};

Container.propTypes = {
  class: PropTypes.string,
  children: PropTypes.string,
};

export default Container;
