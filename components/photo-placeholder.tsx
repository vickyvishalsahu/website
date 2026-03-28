import Image from "next/image";

export function PhotoPlaceholder() {
  return (
    <Image
      src="/vicky_dp.png"
      alt="Vicky"
      width={224}
      height={224}
      priority
      className="h-56 w-56 rounded-full object-cover"
    />
  );
}
