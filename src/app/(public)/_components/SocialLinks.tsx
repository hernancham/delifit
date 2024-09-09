import Link from "next/link";

export default function SocialLinks({
  GroupLink,
}: {
  GroupLink: { url: string; name: string; icon: string }[];
}) {
  return (
    <div className='flex items-center'>
      <ul className='flex gap-12'>
        {GroupLink.map((link, i) => (
          <li key={i}>
            <Link
              href={link.url}
              rel='noreferrer'
              target='_blank'
              className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-500 bg-opacity-10 text-gray-700 transition hover:opacity-75'
            >
              <span className='sr-only'>{link.name}</span>
              <img
                src={link.icon}
                alt={link.name}
                width={36}
                height={36}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
