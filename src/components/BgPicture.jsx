import React from "react";
import Image from "next/image";
import wave from "../../public/assets/net-wave.png";

const BgPicture = () => {
  return (
    <Image
      src={wave}
      alt="Net wave"
      className="fixed top-1/2 -translate-y-1/2 -z-50"
    />
  );
};

export default BgPicture;
