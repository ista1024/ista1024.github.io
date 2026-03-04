"use client";

type HeaderProps = {
  title: string;
  desc?: string;
  children?: React.ReactNode | undefined | null;
};

export default function Header({ title, desc = " ", children }: HeaderProps) {
  return <header className="flex flex-col justify-center items-center md:my-5">
    <h1 className="head_text mb-1">{title}</h1>
    <p className="desc mb-1">{desc}</p>
    {children}
  </header>;
};
