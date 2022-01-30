import Form from 'react-bootstrap/Form'

type BoxItem = {
  isTimer: boolean;
  // setter: State;
  initNum: number;
}

// returns an iterable of concective integers
const range = (start:number, end:number) => {
  return Array.from(Array(end - start + 1).keys()).map(x => x + start);
}

export const SelectBox = (props: BoxItem) => {
  const { isTimer, initNum } = props;

  let nums: number[];

  if (isTimer) {
    nums = range(1, 60);
  } else {
    nums = range(1, 10);
  };

  return (
    <>
      <p>Pomos in each round</p>
      <Form.Select aria-label="Default select example">
        <option>select here</option>
        {nums.map((num: number) => <option value={num.toString()}>{num}</option>)}
      </Form.Select>
    </>
  );
};