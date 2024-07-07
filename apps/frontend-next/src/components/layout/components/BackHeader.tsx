import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export function BackHeader() {
  const router = useRouter();
  const handleBack = () => {
    console.log('handleBack');
    router.back();
  }

  return (
    <div className="h-16 px-32">
      <div onClick={handleBack}>
        <IoArrowBack className="h-16 w-16 text-gray-600 p-5 hover:text-black"  />
      </div>
    </div>
  )
}
