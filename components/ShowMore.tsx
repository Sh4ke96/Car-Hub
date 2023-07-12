"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full gap-5 mt-10 flex-centeter">
      {!isNext && (
        <Button
          title="Show More"
          type="button"
          containerStyles="bg-primary rounded-full text-black hover:text-white duration-300"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
