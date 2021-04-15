import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      gfggf
    </ChildAsFC>
  );
};

export default Parent;
