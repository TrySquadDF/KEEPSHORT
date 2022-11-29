import { useDragonDrop } from "./useDragonDrop";

export default () => {
  const events = useDragonDrop();
  return <div {...events} data-testid="test" />;
};
