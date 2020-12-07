import './App.css';

import Normal from './forms/normal/Normal';
import MultipleInputs from './forms/multipleInputs/MultipleInputs';
import Uncontrolled from './forms/uncontrolled/Uncontrolled';
import FormWithHooks from './forms/formWithHooks/FormWithHooks';
import ReactHookForm from './forms/reactHookForm/ReactHookForm';

function App() {
  return (
    <div className="App">
      <h1>Forms with React</h1>
      <Normal />
      <MultipleInputs />
      <Uncontrolled />
      <FormWithHooks />
      <ReactHookForm />
    </div>
  );
}

export default App;
