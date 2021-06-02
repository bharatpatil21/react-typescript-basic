import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('clicked') }>
    child
  </ChildAsFC>
}

export default Parent;