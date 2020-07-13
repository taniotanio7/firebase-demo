import React from "react";
import { syncWithRemote } from "~/helpers/itemsHelper";
import useAuthState from "~/hooks/useAuthState";
import DownloadIcon from "~/assets/icons/download.svg";

const FetchItemsButton = ({ onClick }) => {
  const loggedIn = useAuthState();

  if (!loggedIn) {
    return null;
  }

  return (
    <button
      className="flex bg-blue-300 text-blue-900 pl-4 pr-2 py-2 ml-2 rounded cursor-pointer font-semibold"
      onClick={handleClick}
    >
      Fetch items
      <DownloadIcon className="ml-2 icon" />
    </button>
  );

  async function handleClick() {
    const items = await syncWithRemote();
    onClick(items);
  }
};

export default FetchItemsButton;
