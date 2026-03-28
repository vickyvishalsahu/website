import Image from "next/image";

export function PhotoPlaceholder() {
  return (
    <Image
      src="/vicky_dp.png"
      alt="Vicky"
      width={320}
      height={320}
      priority
      className="rounded-full object-cover"
    />
  );
}
