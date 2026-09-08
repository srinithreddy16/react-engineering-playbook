import { useEffect } from "react";

export default function withLogger(WrappedComponent: any) {
  return function EnhancedComponent(props: any) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);
    console.log(`${WrappedComponent.name} rendered`);
    return <WrappedComponent {...props} />;
  };
}
