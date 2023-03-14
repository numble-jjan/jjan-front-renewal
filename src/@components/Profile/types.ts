import type { ImageSize } from "@/types/image";
import type { AvartarVariant } from "@/@components/Core/Avartar";

export type ProfileVariant = Exclude<AvartarVariant, "setting">;

type ProfileStyle = { imgPadding: string } & ImageSize;

export type ProfileStyles = {
  [key in ProfileVariant]: ProfileStyle;
};
