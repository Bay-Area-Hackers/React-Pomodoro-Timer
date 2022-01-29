// React = require('react');
// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');
import Form from 'react-bootstrap/Form'

type BoxItem = {
  isTimer: boolean;
  // setter: State;
  initNum: number;
}

export const SelectBox = (props: BoxItem) => {
  const { isTimer, initNum } = props;
  return (
    <>
      <p>Pomos in each round</p>
      <Form.Select aria-label="Default select example">
        <option>select here</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Form.Select>
    </>
  );
};