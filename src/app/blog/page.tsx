const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Improving SEO for your website",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolore voluptate est consequatur, non sunt quas asperiores.",
    date: "Mar 22, 2020",
    datetime: "2020-03-22",
    category: { title: "SEO", href: "#" },
    author: {
      name: "Sarah Johnson",
      role: "SEO Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1565765688-8185600835b6?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 3,
    title: "Building a strong brand identity",
    href: "#",
    description:
      "Building a brand identity takes time and effort, but the rewards are worth it. Here's how to ensure your brand leaves a lasting impact.",
    date: "Apr 4, 2020",
    datetime: "2020-04-04",
    category: { title: "Branding", href: "#" },
    author: {
      name: "David Williams",
      role: "Creative Director",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1556582892-ea8a5e763dc6?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 4,
    title: "Effective email marketing strategies",
    href: "#",
    description:
      "Learn the best strategies for creating email marketing campaigns that convert, including tips for personalization and automation.",
    date: "Apr 10, 2020",
    datetime: "2020-04-10",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Emma Davis",
      role: "Email Marketing Manager",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1583862499384-8d13f0d6b5c5?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 5,
    title: "The future of social media advertising",
    href: "#",
    description:
      "Social media advertising is evolving rapidly. Stay ahead of the curve with these insights into future trends and strategies.",
    date: "Apr 18, 2020",
    datetime: "2020-04-18",
    category: { title: "Social Media", href: "#" },
    author: {
      name: "Alice Green",
      role: "Social Media Strategist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 6,
    title: "Mastering Google Ads campaigns",
    href: "#",
    description:
      "Unlock the secrets to running successful Google Ads campaigns with these best practices and tips to optimize your ad spend.",
    date: "May 1, 2020",
    datetime: "2020-05-01",
    category: { title: "PPC", href: "#" },
    author: {
      name: "John Smith",
      role: "PPC Expert",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1562574302-c466b1ffb566?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 7,
    title: "Content marketing tips for 2020",
    href: "#",
    description:
      "Content marketing is an essential part of any successful strategy. Here are tips for creating valuable content that resonates with your audience.",
    date: "May 10, 2020",
    datetime: "2020-05-10",
    category: { title: "Content", href: "#" },
    author: {
      name: "Olivia Brown",
      role: "Content Marketing Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1542744095-5de3542db2ac?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 8,
    title: "How to improve your website's UX",
    href: "#",
    description:
      "User experience (UX) is crucial for keeping visitors engaged. Learn practical ways to enhance the UX of your website and improve conversion rates.",
    date: "May 20, 2020",
    datetime: "2020-05-20",
    category: { title: "UX/UI", href: "#" },
    author: {
      name: "James Lee",
      role: "UX Designer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1501594907350-6a0c9ad7d707?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 9,
    title: "Creating engaging video content",
    href: "#",
    description:
      "Video content continues to drive engagement. Learn how to produce high-quality videos that resonate with your audience and boost engagement.",
    date: "Jun 1, 2020",
    datetime: "2020-06-01",
    category: { title: "Video Marketing", href: "#" },
    author: {
      name: "Sophia Miller",
      role: "Video Production Lead",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1574204425192-b02ee3212555?crop=faces&fit=crop&h=256&w=256",
    },
  },
  {
    id: 10,
    title: "Navigating the world of e-commerce",
    href: "#",
    description:
      "E-commerce is booming, and so are the opportunities. This guide will help you navigate the complexities of running an e-commerce store.",
    date: "Jun 10, 2020",
    datetime: "2020-06-10",
    category: { title: "E-Commerce", href: "#" },
    author: {
      name: "Michael Johnson",
      role: "E-commerce Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1502767127687-7d27e07b4d80?crop=faces&fit=crop&h=256&w=256",
    },
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 min-h-[80em]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Welcome to My Blog!
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Nulla nulla ullamco ullamco veniam est minim ea fugiat ad qui esse
            laborum magna anim. Id nulla ex consequat eiusmod Lorem
            exercitation. Sint consequat qui consequat nisi nisi est irure
            eiusmod cupidatat non eiusmod officia Lorem. Duis anim esse enim
            voluptate cupidatat sunt ad proident eu tempor proident est laboris.
            Labore dolor ea nulla ipsum. Id ullamco enim reprehenderit eu esse
            dolor fugiat eu culpa eu eiusmod sint.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-8 rounded-full ring-2 ring-white"
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-8 rounded-full ring-2 ring-white"
                  />
                </div>
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
