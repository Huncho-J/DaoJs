import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xB65EE16e6c9c942a8bda4151969088380371d2D6");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Libre",
        description: "This asset grants access to the DAOJs",
        image: readFileSync("scripts/assets/DaoNFT.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();