import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/16/solid";
import { FaCheckDouble } from "react-icons/fa";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$29",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Example() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Work with us
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-red-600">
                  Deploy faster
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  A better workflow
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <FaCheckDouble
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-red-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Push to deploy.
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaCheckDouble
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-red-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        SSL certificates.
                      </strong>{" "}
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FaCheckDouble
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-red-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Database backups.
                      </strong>{" "}
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No server? No problem.
                </h2>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                  consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                  euismod vitae interdum mauris enim, consequat vulputate nibh.
                  Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                  Tincidunt enim cursus ridiculus mi. Pellentesque nam sed
                  nullam sed diam turpis ipsum eu a sed convallis diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto text-center">
          <h2 className="text-base/7 font-semibold text-red-600">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Choose the right plan for you
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            Laboris consectetur adipisicing reprehenderit deserunt non sunt
            mollit. Sint duis esse tempor ad magna pariatur magna incididunt
            fugiat pariatur qui occaecat ut. Elit id ullamco et anim quis anim
            tempor incididunt officia sint occaecat cillum esse eiusmod.
            Excepteur aliqua do minim elit esse exercitation sit cupidatat
            cupidatat cupidatat Lorem officia. Do sit labore qui mollit
            adipisicing commodo ea enim qui commodo duis officia.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60 sm:mx-8 lg:mx-0",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-red-400" : "text-red-600",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-gray-400" : "text-gray-500",
                    "text-base"
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm/6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-red-400" : "text-red-600",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-red-500 text-white shadow-xs hover:bg-red-400 focus-visible:outline-red-500"
                    : "text-red-600 ring-1 ring-red-200 ring-inset hover:ring-red-300 focus-visible:outline-red-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-red-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Consectetur fugiat laboris elit commodo pariatur labore eiusmod
              elit. Esse irure dolore ut officia quis nisi ut sint ex deserunt
              pariatur elit commodo. Cillum eu laborum fugiat occaecat nostrud
              elit nostrud sit non anim adipisicing enim officia esse.
              Consectetur mollit quis tempor voluptate qui elit proident
              reprehenderit ea in cillum excepteur.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-red-600">
            Deploy faster
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Security
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Exercitation officia laboris excepteur deserunt aliqua sint.
                    Voluptate adipisicing eiusmod cupidatat dolore labore anim
                    minim labore. Velit nostrud veniam pariatur excepteur in
                    elit et ipsum minim aliquip officia consectetur et duis.
                    Ullamco ullamco velit dolor dolor Lorem nulla excepteur.
                  </p>{" "}
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Exercitation eu laborum do consequat consectetur veniam
                    pariatur amet. Eiusmod elit cillum duis laborum sunt eu
                    ullamco reprehenderit sit irure. Ullamco sit cupidatat
                    nostrud laborum deserunt commodo excepteur labore occaecat
                    exercitation non ipsum. Minim ullamco dolore id mollit
                    commodo sit eu velit eu cillum deserunt. Amet id voluptate
                    cillum esse nostrud id mollit ea consectetur fugiat. Officia
                    reprehenderit proident nisi consequat qui eu et mollit.
                  </p>{" "}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
