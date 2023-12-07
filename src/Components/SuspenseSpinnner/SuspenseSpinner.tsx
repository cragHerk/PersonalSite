import { ClimbingBoxLoader } from "react-spinners";

export const SuspenseSpinner = () => {
  return (
    <div className="fixed h-full w-full flex justify-center items-center bg-custom-black">
      <ClimbingBoxLoader color="red" size={50} />
    </div>
  );
};
