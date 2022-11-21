import React from "react";
import "./style.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "" // default value (aka initial value)
});
const txtState = ()=>useRecoilState(textState)

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  }
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
      <TextInput2 />
    </div>
  );
}

function TextInput() {
  const [text, setText] = txtState();

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function TextInput2() {
  const [text, setText] = txtState();

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <hr />
      <input type="text" value={text} onChange={onChange} />
      <hr />
    </div>
  );
}


export default function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
