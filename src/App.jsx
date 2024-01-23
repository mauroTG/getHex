import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import ColorThief from "colorthief";
import ColorCard from "./components/ColorCard";

const App = () => {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState([]);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const image = new Image();
      image.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(image, 8);
        setUploadedImage(e.target.result);
        setColorPalette(colorPalette);
      };
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mx-auto my-5 p-5 flex flex-col gap-y-8">
      <div className="border rounded-md shadow-lg border-zinc-600 overflow-hidden">
        {uploadedImage ? (
          <img src={uploadedImage} className="mx-auto" />
        ) : (
          <form className="flex flex-col items-center justify-center gap-y-6  py-5">
            <h2 className="text-xl font-bold text-zinc-400">Upload an image</h2>

            <label
              htmlFor="file"
              className="border rounded-md py-1 px-4 cursor-pointer text-zinc-500 border-zinc-500 hover:border-zinc-400 hover:text-zinc-400 transition duration-500 ease-out text-center flex gap-x-1 justify-center items-center">
              <PhotoIcon className="h-5 w-5" />
              <span>Upload image</span>
            </label>
            <input
              type="file"
              id="file"
              hidden
              accept="image/*"
              onChange={uploadImage}
            />
          </form>
        )}
      </div>

      {colorPalette && (
        <ul className="flex flex-row gap-x-4 mx-auto justify-center flex-wrap">
          {colorPalette.map((color, i) => {
            const rgb = `rgb(${color})`;
            const hex = `#${
              toHex(color[0]) + toHex(color[1]) + toHex(color[2])
            }`;
            return <ColorCard key={i} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}

      {uploadedImage ? (
        <form className="flex flex-col items-center justify-center gap-y-6">
          <label
            htmlFor="file"
            className="border rounded-md py-1 px-4 cursor-pointer text-zinc-500 border-zinc-500 hover:border-zinc-400 hover:text-zinc-400 transition duration-500 ease-out text-center flex gap-x-1 justify-center items-center">
            <PhotoIcon className="h-5 w-5" />
            <span>Upload another image</span>
          </label>
          <input
            type="file"
            id="file"
            hidden
            accept="image/*"
            onChange={uploadImage}
          />
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
