const subTitle = "Button neon";

const buttonProps = {
  buttonType: `neon`,
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Button </span>
      <span className="component">buttonType</span>=
      <span className="string">"neon"</span>
      <span className="react">&gt;</span>
      <br />
      <span className="text tab">Button Here</span>
      <br />
      <span className="react">&lt;/Button&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "buttonType",
    type: "string",
    values: ["neon", "default classic", "classic"],
    description: "Button type.",
  },
  {
    name: "loading",
    type: "bool",
    values: ["default false"],
    description: "This prop displayed a spinner into the button.",
  },
  {
    name: "disabled",
    type: "bool",
    values: [`default false`],
    description: "This prop disables the button.",
  },
  {
    name: "onClick",
    type: "function",
    values: [],
    description: "",
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Button content.",
  },
];

const buttonsProps = {
  buttonProps,
  componentText,
  propsDescription,
  subTitle,
};

export default buttonsProps;
