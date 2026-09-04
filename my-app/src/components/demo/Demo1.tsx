import { PureComponent } from 'react'

export default class Demo1 extends PureComponent {
  render() {
    return (
      <div>
        <h3>Component</h3>
        <p>
          A class component that extends Component is a normal class component.
          It re-renders when the parent re-renders or when setState is called.
        </p>

        <h3>Pure Component</h3>
        <p>
          In a class component, if the component extends the PureComponent class,
          it is called a Pure Component. Every functional component is a
          pure component because it does not re-render if the state variable does not change.
        </p>
      </div>
    )
  }
}
