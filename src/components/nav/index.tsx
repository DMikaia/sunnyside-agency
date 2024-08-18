interface Props {
  labels: string[];
}

export default function NavBar({ labels }: Props) {
  return (
    <div className="hidden tablet:flex items-center justify-center gap-8">
      <nav className="flex items-center justify-center gap-8 w-fit h-fit font-barlow-600">
        {labels.map((label) => (
          <span
            key={label}
            rel="stylesheet"
            className="capitalize text-base tv:text-xl text-white opacity-85 duration-200 ease-linear hover:cursor-pointer hover:opacity-100"
          >
            {label}
          </span>
        ))}
      </nav>
      <button className="uppercase text-very-dark-desaturated-blue text-sm tv:text-lg bg-white/100 duration-200 ease-in-out hover:bg-white/25 hover:text-white py-2 px-4 rounded-3xl font-barlow-600">
        contact
      </button>
    </div>
  );
}
