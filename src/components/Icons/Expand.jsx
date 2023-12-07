import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const Expand = (props) => {
  const { direction = 'down' } = props;

  return (
    <span
      className="icon pointer"
      style={direction === 'up' ? { transform: 'rotate(180deg)' } : undefined}
    >
      <Arrow />
    </span>
  );
};

export default Expand;