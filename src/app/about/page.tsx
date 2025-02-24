import Image from "next/image";

export default function About() {
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ];
  return (
    <>
      <div className="min-h-[50em] flex flex-col w-11/12 mx-auto py-9">
        <header className="bg-primary-color text-foreground py-6 text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
        </header>
        <main className="flex gap-5 p-6">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Keenan</h2>
            <p className="text-lg text-gray-700 mb-4">
              Ipsum pariatur pariatur nostrud reprehenderit enim exercitation
              amet reprehenderit ea ea. Veniam amet do elit esse anim aliqua.
              Excepteur est excepteur quis consectetur non proident aliqua id
              sint labore. Cupidatat cupidatat in ut ut ut ex. Ex id aute cillum
              excepteur et id exercitation. Ipsum Lorem labore do ullamco irure
              cillum nulla exercitation sunt eu dolore. Sit laborum enim dolor
              laborum do reprehenderit ipsum nisi ut nulla excepteur ipsum.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Quis magna nulla dolor exercitation nostrud sunt labore velit
              minim Lorem ex enim Lorem. Aute tempor qui non dolor sunt. Nulla
              Lorem mollit Lorem incididunt ullamco dolore esse amet consectetur
              velit consequat Lorem. Cillum eiusmod non sunt eu dolore laboris
              laborum. Ad est consequat voluptate ad nostrud enim deserunt.
              Commodo do occaecat occaecat aliqua tempor excepteur.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Non id ullamco fugiat exercitation veniam proident. Velit tempor
              aliqua exercitation officia nisi dolore. Irure id et Lorem tempor
              magna labore ut amet reprehenderit officia aliquip nostrud. Velit
              nostrud id irure commodo ullamco est mollit sint dolor quis velit
              esse ut. Amet duis aute in veniam dolore deserunt non nisi non
              anim nulla excepteur.
            </p>
            <p className="text-lg text-gray-700">
              Dolore occaecat reprehenderit exercitation occaecat veniam ea et
              in consectetur eiusmod elit. Officia proident in nulla qui dolor
              excepteur aute aliqua excepteur occaecat. Duis laborum ipsum id
              sunt veniam Lorem laborum elit do qui est. Cillum voluptate sit
              eiusmod ex mollit. Irure elit Lorem id irure elit ipsum aliqua
              adipisicing. Sint labore ad duis adipisicing excepteur culpa
              veniam enim ut voluptate nostrud deserunt.
            </p>
          </section>
          <Image
            height={800}
            width={500}
            src={"/images/gettyimages-1273516682.jpg"}
            className="object-cover object-center"
            alt=""
          />
        </main>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
