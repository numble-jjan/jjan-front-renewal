import React from "react";

interface AvartarUploaderProps {
  mode: "single" | "multiple";
  setImage: (image: File[]) => void;
  /**
   * 현재는 accept의 타입이 string[] 이라서 ["a", "b", "c"]
   * 와 같은 타입도 받을 수 있음 ["image/jpg", "image/png", "image/jpeg"]
   * 와 같이 file 타입의 형식만 받을 수 있게 이 문제를 해결해야 함
   */
  accept?: string[];
  fileInputRef: React.Ref<HTMLInputElement>;
}

const ImageUploader = ({
  setImage,
  mode,
  accept,
  fileInputRef,
}: AvartarUploaderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImage(filesArray);
    }
  };

  return (
    <input
      type="file"
      ref={fileInputRef}
      onChange={handleChange}
      accept={accept ? accept.join() : undefined}
      multiple={mode === "multiple"}
      style={{ display: "none" }}
    />
  );
};

export default ImageUploader;
