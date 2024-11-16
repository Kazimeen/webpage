import Image from "next/image";

function HtmlSVG(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="arcs"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

export default function Home() {
  const cards = [
    {
      text: "Help write SQL to generate a report",
      svg: HtmlSVG,
    },
    {
      text: "Help write SQL to generate a report",
      svg: HtmlSVG,
    },
    {
      text: "Help write SQL to generate a report",
      svg: HtmlSVG,
    },
    {
      text: "Help write SQL to generate a report",
      svg: HtmlSVG,
    },
  ];
  return (
    <main className="bg-dark text-white h-screen p-8 flex flex-col justify-center items-center">
      <div className="space-y-11 relative h-full overflow-y-scroll">
        <div className="text-5xl font-semibold space-y-2">
          <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Hello, Debian.
          </h1>
          <h1 className="text-[#444746]">How can I help you today?</h1>
        </div>

        <div
          className="flex flex-row space-x-3"
        >
          {cards.map((props) => (
            <button
              key={props.text}
              className="bg-[#1e1f20] w-fit p-4 flex flex-col rounded-xl hover:bg-[rgba(255,255,255,0.08)] text-left"
              style={{ width: "12.5rem", height: "12.5rem" }}
            >
              <h1 className="text-light">{props.text}</h1>
              <div className="bg-[#131314] rounded-full p-2 w-fit ml-auto mt-auto">
                <props.svg className="w-6 h-6 stroke-white" />
              </div>
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 w-full drop-shadow-2xl rounded-full bg-gradient-to-r from-neutral-600/25 to-neutral-900/25 bg-overflow-visible p-2">
          <input
            type="text"
            placeholder="Enter a prompt here"
            className="w-full rounded-full py-4 px-8"
          />
        </div>
      </div>
    </main>
  );
}
